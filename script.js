$(document).ready(function () {
  imageWrapper = [$(".image-wrapper")[0], $(".image-wrapper-bottom")[0]];
  imageWrapperChildren = [
    $(".image-wrapper").children().toArray(),
    $(".image-wrapper-bottom").children().toArray(),
  ];
  let widthToScroll = imageWrapperChildren[0][0].offsetWidth;
  column = [
    Math.floor(imageWrapper[0].offsetWidth / widthToScroll),
    Math.floor(imageWrapper[1].offsetWidth / widthToScroll),
  ];

  for (let x = 0; x < 2; x++) {
    imageWrapperChildren[x].slice(0, column[x]);
    imageWrapperChildren[x].forEach((item) => {
      imageWrapper[x].insertAdjacentHTML(
        "beforeend",
        $(item).prop("outerHTML")
      );
    });
    imageWrapperChildren[x]
      .slice(-column[x])
      .reverse()
      .forEach((item) => {
        imageWrapper[x].insertAdjacentHTML(
          "afterbegin",
          $(item).prop("outerHTML")
        );
      });

    if (x == 0) {
      $(".image-wrapper").addClass("no-smooth");
      $(".image-wrapper").scrollLeft(imageWrapper[x].offsetWidth);
      $(".image-wrapper").removeClass("no-smooth");
    } else {
      $(".image-wrapper-bottom").addClass("no-smooth");
      $(".image-wrapper-bottom").scrollLeft(imageWrapper[x].offsetWidth);
      $(".image-wrapper-bottom").removeClass("no-smooth");
    }

    $(".image-wrapper").on("scroll", function () {
      if (imageWrapper[x].scrollLeft < 2) {
        imageWrapper[x].classList.add("no-smooth");
        imageWrapper[x].scrollLeft =
          imageWrapper[x].scrollWidth - 2 * imageWrapper[x].offsetWidth;
        imageWrapper[x].classList.remove("no-smooth");
      } else if (
        imageWrapper[x].scrollLeft ===
        imageWrapper[x].scrollWidth - imageWrapper[x].offsetWidth
      ) {
        imageWrapper[x].classList.add("no-smooth");
        imageWrapper[x].scrollLeft = imageWrapper[x].offsetWidth;
        imageWrapper[x].classList.remove("no-smooth");
      }
    });
    $(".image-wrapper-bottom").on("scroll", function () {
      if (imageWrapper[x].scrollLeft < 1) {
        imageWrapper[x].classList.add("no-smooth");
        imageWrapper[x].scrollLeft =
          imageWrapper[x].scrollWidth - 2 * imageWrapper[x].offsetWidth;
        imageWrapper[x].classList.remove("no-smooth");
      } else if (
        imageWrapper[x].scrollLeft ===
        imageWrapper[x].scrollWidth - imageWrapper[x].offsetWidth
      ) {
        imageWrapper[x].classList.add("no-smooth");
        imageWrapper[x].scrollLeft = imageWrapper[x].offsetWidth;
        imageWrapper[x].classList.remove("no-smooth");
      }
    });
  }
  //ARROW CHANGE ON HOVER AND CLICK
  $(".next-arrow")
    .on("click", function () {
      imageWrapper[0].scrollLeft += widthToScroll;
      imageWrapper[1].scrollLeft += widthToScroll;
      var btn = $(this);
      btn.prop("disabled", true);
      window.setTimeout(function () {
        btn.prop("disabled", false);
      }, 600);
    })
    .on("mouseenter", function () {
      $(".next-arrow img").attr("src", "img/arrow-blue-right.png");
    })
    .on("mouseleave", function () {
      $(".next-arrow img").attr("src", "img/arrow-gray-right.png");
    });
  $(".prev-arrow")
    .on("click", function () {
      imageWrapper[0].scrollLeft -= widthToScroll;
      imageWrapper[1].scrollLeft -= widthToScroll;
      var btn = $(this);
      btn.prop("disabled", true);
      window.setTimeout(function () {
        btn.prop("disabled", false);
      }, 600);
    })
    .on("mouseenter", function () {
      $(".prev-arrow img").attr("src", "img/arrow-blue-left.png");
    })
    .on("mouseleave", function () {
      $(".prev-arrow img").attr("src", "img/arrow-gray-left.png");
    });
});
