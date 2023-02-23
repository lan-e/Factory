$(document).ready(function () {
  let imageWrapperTop = $(".image-wrapper");
  let imageWrapperBottom = $(".image-wrapper-bottom");
  let i = 5;
  let j = 4;
  $(".next-arrow")
    .on("click", function () {
      if (i > 0) {
        $(".image-wrapper img:last").prependTo(imageWrapperTop);
        i--;
      } else if (i == 0) {
        $(".image-wrapper img:last").prependTo(imageWrapperTop);
        i = 5;
      }
      if (j > 0) {
        $(".image-wrapper-bottom img:last").prependTo(imageWrapperBottom);
        j--;
      } else if (j == 0) {
        $(".image-wrapper-bottom img:last").prependTo(imageWrapperBottom);
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
        $(".image-wrapper img:first")
          .hide()
          .appendTo(imageWrapperTop)
          .fadeIn("slow");
        i--;
      } else if (i == 0) {
        $(".image-wrapper img:first")
          .hide()
          .appendTo(imageWrapperTop)
          .fadeIn("slow");
        i = 5;
      }
      if (j > 0) {
        $(".image-wrapper-bottom img:first")
          .hide()
          .appendTo(imageWrapperBottom)
          .fadeIn("slow");
        j--;
      } else if (j == 0) {
        $(".image-wrapper-bottom img:first")
          .hide()
          .appendTo(imageWrapperBottom)
          .fadeIn("slow");
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
