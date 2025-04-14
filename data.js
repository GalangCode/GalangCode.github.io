const navbar = document.querySelector(".navbar");

window.addEventListener("scroll" , () => {
    const windowPosition = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active", windowPosition);
});

// floating button whatsapp
// window.addEventListener("load", function() {
//     var whatsappButton = document.querySelector(".whatsapp-float");
//     var whatsappPopup = document.querySelector(".whatsapp-popup");
//     var whatsappPopupClose = document.querySelector(".whatsapp-popup-close");
  
//     whatsappButton.addEventListener("click", function(e) {
//       e.preventDefault();
//       whatsappButton.classList.toggle("open");
//     });
  
//     whatsappPopupClose.addEventListener("click", function() {
//       whatsappButton.classList.remove("open");
//     });
//   });

// document.getElementById("floatingButton").addEventListener("click", function() {
//   document.getElementById("chatPopup").style.display = "block";
// });

// document.getElementById("closeButton").addEventListener("click", function() {
//   document.getElementById("chatPopup").style.display = "none";
// });


$(document).ready(function () {
    var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 3) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 1) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});