$(document).ready(function () {
  let imageWrapper = document.querySelector(".image-wrapper");
  let imageWrapperChildren = Array.from(imageWrapper.children);
  let widthToScroll = imageWrapper.children[0].offsetWidth;
  let column = Math.floor(imageWrapper.offsetWidth / widthToScroll);

  let imageWrapperBottom = document.querySelector(".image-wrapper-bottom");
  let imageWrapperBottomChildren = Array.from(imageWrapperBottom.children);
  let widthToScrollBottom = imageWrapperBottom.children[0].offsetWidth;
  let columnBottom = Math.floor(
    imageWrapperBottom.offsetWidth / widthToScrollBottom
  );

  imageWrapperChildren.slice(0, column).forEach((item) => {
    imageWrapper.insertAdjacentHTML("beforeend", item.outerHTML);
  });
  imageWrapperChildren
    .slice(-column)
    .reverse()
    .forEach((item) => {
      imageWrapper.insertAdjacentHTML("afterbegin", item.outerHTML);
    });

  $(".image-wrapper").addClass("no-smooth");
  $(".image-wrapper").scrollLeft(imageWrapper.offsetWidth);
  $(".image-wrapper").removeClass("no-smooth");

  //needed for looping
  $(".image-wrapper").on("scroll", function () {
    if (imageWrapper.scrollLeft === 0) {
      imageWrapper.classList.add("no-smooth");
      imageWrapper.scrollLeft =
        imageWrapper.scrollWidth - 2 * imageWrapper.offsetWidth;
      imageWrapper.classList.remove("no-smooth");
    } else if (
      imageWrapper.scrollLeft ===
      imageWrapper.scrollWidth - imageWrapper.offsetWidth
    ) {
      imageWrapper.classList.add("no-smooth");
      imageWrapper.scrollLeft = imageWrapper.offsetWidth;
      imageWrapper.classList.remove("no-smooth");
    }
  });
  //-------------------------------------------------------

  imageWrapperBottomChildren.slice(0, columnBottom).forEach((item) => {
    imageWrapperBottom.insertAdjacentHTML("beforeend", item.outerHTML);
  });
  imageWrapperBottomChildren
    .slice(-columnBottom)
    .reverse()
    .forEach((item) => {
      imageWrapperBottom.insertAdjacentHTML("afterbegin", item.outerHTML);
    });

  $(".image-wrapper-bottom").addClass("no-smooth");
  $(".image-wrapper-bottom").scrollLeft(imageWrapperBottom.offsetWidth);
  $(".image-wrapper-bottom").removeClass("no-smooth");

  //needed for looping
  $(".image-wrapper-bottom").on("scroll", function () {
    if (imageWrapperBottom.scrollLeft === 0) {
      imageWrapperBottom.classList.add("no-smooth");
      imageWrapperBottom.scrollLeft =
        imageWrapperBottom.scrollWidth - imageWrapperBottom.offsetWidth;
      imageWrapperBottom.classList.remove("no-smooth");
    } else if (
      imageWrapperBottom.scrollLeft ===
      imageWrapperBottom.scrollWidth - imageWrapperBottom.offsetWidth
    ) {
      imageWrapperBottom.classList.add("no-smooth");
      imageWrapperBottom.scrollLeft = imageWrapperBottom.offsetWidth;
      imageWrapperBottom.classList.remove("no-smooth");
    }
  });
  //-------------------------------------------------------
  //ARROW CHANGE ON HOVER AND CLICK
  $(".next-arrow")
    .on("click", function () {
      imageWrapper.scrollLeft += widthToScroll;
      imageWrapperBottom.scrollLeft += widthToScrollBottom;
    })
    .on("mouseenter", function () {
      $(".next-arrow img").attr("src", "img/arrow-blue-right.png");
    })
    .on("mouseleave", function () {
      $(".next-arrow img").attr("src", "img/arrow-gray-right.png");
    });

  $(".prev-arrow")
    .on("click", function () {
      imageWrapper.scrollLeft -= widthToScroll;
      imageWrapperBottom.scrollLeft -= widthToScrollBottom;
    })
    .on("mouseenter", function () {
      $(".prev-arrow img").attr("src", "img/arrow-blue-left.png");
    })
    .on("mouseleave", function () {
      $(".prev-arrow img").attr("src", "img/arrow-gray-left.png");
    });
});
