$(document).ready(function () {
  const imageWrapper = document.querySelector(".image-wrapper");
  const imageWrapperChildren = Array.from(imageWrapper.children);
  const widthToScroll = imageWrapper.children[0].offsetWidth;
  const arrowPrev = document.querySelector(".arrow.prev");
  const arrowNext = document.querySelector(".arrow.next");
  const column = Math.floor(imageWrapper.offsetWidth / widthToScroll); //+24?

  imageWrapperChildren
    .slice(-column)
    .reverse()
    .forEach((item) => {
      imageWrapper.insertAdjacentHTML("afterbegin", item.outerHTML);
    });

  imageWrapperChildren.slice(0, column).forEach((item) => {
    imageWrapper.insertAdjacentHTML("beforeend", item.outerHTML);
  });

  //bez ovog ne radi lijevi arrow
  $(".image-wrapper").addClass("no-smooth");
  $(".image-wrapper").scrollLeft(imageWrapper.offsetWidth); //provjeri ako bude error
  $(".image-wrapper").removeClass("no-smooth");

  $(".arrow.prev").click(function () {
    imageWrapper.scrollLeft -= widthToScroll;
  });

  $(".arrow.next").click(function () {
    imageWrapper.scrollLeft += widthToScroll;
  });

  //za beskonacnost
  $(".image-wrapper").scroll(function () {
    if (imageWrapper.scrollLeft === 0) {
      imageWrapper.classList.add("no-smooth");
      imageWrapper.scrollLeft =
        imageWrapper.scrollWidth - 2 * imageWrapper.offsetWidth;
      imageWrapper.classList.remove("no-smooth");
      console.log(imageWrapper.offsetWidth);
    } else if (
      imageWrapper.scrollLeft ===
      imageWrapper.scrollWidth - imageWrapper.offsetWidth
    ) {
      imageWrapper.classList.add("no-smooth");
      imageWrapper.scrollLeft = imageWrapper.offsetWidth;
      imageWrapper.classList.remove("no-smooth");
      console.log(imageWrapper.scrollLeft);
    }
  });

  //ARROW CHANGE ON HOVER AND CLICK

  $(".next")
    .click(function () {
      $(".next img").attr("src", "img/arrow-blue-right.png");
    })
    .mouseenter(function () {
      $(".next img").attr("src", "img/arrow-blue-right.png");
    })
    .mouseleave(function () {
      $(".next img").attr("src", "img/arrow-gray-right.png");
    });

  $(".prev")
    .click(function () {
      $(".prev img").attr("src", "img/arrow-blue-left.png");
    })
    .mouseenter(function () {
      $(".prev img").attr("src", "img/arrow-blue-left.png");
    })
    .mouseleave(function () {
      $(".prev img").attr("src", "img/arrow-gray-left.png");
    });
});
