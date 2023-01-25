$(document).ready(function () {
  let imageWrapper = document.querySelector(".image-wrapper");
  let imageWrapperChildren = Array.from(imageWrapper.children);
  let widthToScroll = imageWrapper.children[0].offsetWidth;
  let column = Math.floor(imageWrapper.offsetWidth / widthToScroll);

  imageWrapperChildren.slice(0, column).forEach((item) => {
    imageWrapper.insertAdjacentHTML("beforeend", item.outerHTML);
  });
  imageWrapperChildren
    .slice(-column)
    .reverse()
    .forEach((item) => {
      imageWrapper.insertAdjacentHTML("afterbegin", item.outerHTML); //nakon početka
    });

  //bez ovog lijevi arrow radi tek nakon klika na desni
  $(".image-wrapper").addClass("no-smooth");
  $(".image-wrapper").scrollLeft(imageWrapper.offsetWidth);
  $(".image-wrapper").removeClass("no-smooth");

  $(".arrow.prev").click(function () {
    imageWrapper.scrollLeft -= widthToScroll;
  });

  $(".arrow.next").click(function () {
    imageWrapper.scrollLeft += widthToScroll;
  });

  //infinite scrolling
  $(".image-wrapper").scroll(function () {
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
