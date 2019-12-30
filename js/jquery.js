$(document).ready(function() {

    $('.slidewrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
  });

    $('.enter').click(function() {
        $('.darkBackground').toggleClass("block");
        $('.authorization').show(500);

    });

    $('.authoClose').click(function() {
       $('.darkBackground').toggleClass("block");
       $('.authorization').hide(500);
   });


});

function u() {
    //debugger;
   
}