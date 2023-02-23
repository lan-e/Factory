$(document).ready(function () {
  let imgWrapperTop = $(".image-wrapper");
  let imgWrapperBottom = $(".image-wrapper-bottom");
  let imgTop = ".image-wrapper img";
  let imgBottom = ".image-wrapper-bottom img";
  //let array = $(imgTop).map(function (index, element) {return '<img src="' + $(element).attr("src") + '" alt="">';}).get();
  //let arrayBottom = $(imgBottom).map(function (index, element) {return '<img src="' + $(element).attr("src") + '" alt="">';}).get();
  let i = 5;
  let j = 4;
  $(".next-arrow")
    .on("click", function () {
      if (i > 0) {
        $(imgTop).last().prependTo(imgWrapperTop);
        i--;
      } else if (i == 0) {
        $(imgTop).last().prependTo(imgWrapperTop);
        i = 5;
      }
      if (j > 0) {
        $(imgBottom).last().prependTo(imgWrapperBottom);
        j--;
      } else if (j == 0) {
        $(imgBottom).last().prependTo(imgWrapperBottom);
        j = 4;
      }
    })
    .on("mouseenter", function () {
      $(".next-arrow img").attr("src", "img/arrow-blue-right.png");
    })
    .on("mouseleave", function () {
      $(".next-arrow img").attr("src", "img/arrow-gray-right.png");
    });
  $(".prev-arrow")
    .on("click", function () {
      if (i > 0) {
        $(imgTop).first().hide().appendTo(imgWrapperTop).fadeIn("slow");
        i--;
      } else if (i == 0) {
        $(imgTop).first().hide().appendTo(imgWrapperTop).fadeIn("slow");
        i = 5;
      }
      if (j > 0) {
        $(imgBottom).first().hide().appendTo(imgWrapperBottom).fadeIn("slow");
        j--;
      } else if (j == 0) {
        $(imgBottom).first().hide().appendTo(imgWrapperBottom).fadeIn("slow");
        j = 4;
      }
    })
    .on("mouseenter", function () {
      $(".prev-arrow img").attr("src", "img/arrow-blue-left.png");
    })
    .on("mouseleave", function () {
      $(".prev-arrow img").attr("src", "img/arrow-gray-left.png");
    });
});
