$(document).ready(function () {
  let imgWrapperTop = $(".image-wrapper");
  let imgWrapperBottom = $(".image-wrapper-bottom");
  let imgTop = ".image-wrapper img";
  let imgBottom = ".image-wrapper-bottom img";
  $(".next-arrow")
    .on("click", function () {
      $(imgTop).last().prependTo(imgWrapperTop);
      $(imgBottom).last().prependTo(imgWrapperBottom);
    })
    .on("mouseenter", function () {
      $(".next-arrow img").attr("src", "img/arrow-blue-right.png");
    })
    .on("mouseleave", function () {
      $(".next-arrow img").attr("src", "img/arrow-gray-right.png");
    });
  $(".prev-arrow")
    .on("click", function () {
      $(imgTop).first().hide().appendTo(imgWrapperTop).fadeIn("slow");
      $(imgBottom).first().hide().appendTo(imgWrapperBottom).fadeIn("slow");
    })
    .on("mouseenter", function () {
      $(".prev-arrow img").attr("src", "img/arrow-blue-left.png");
    })
    .on("mouseleave", function () {
      $(".prev-arrow img").attr("src", "img/arrow-gray-left.png");
    });
});
