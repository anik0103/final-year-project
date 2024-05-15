
  $(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 1,
      infinite: true,
      speed: 800,
      /*dots: true,*/
      arrows: true,
      nextArrow: document.getElementById("slick-next"),
      prevArrow: document.getElementById("slick-previous"),
    });
  });
  ;
  