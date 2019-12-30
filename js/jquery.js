var slideCount = $('.slidewrapper').children().length;
var interval = 1000;
var navBtnId = 0;
var maxSymbolsTextarea = 150;
var currentSlide=parseInt($('.slidewrapper').data('current'));
var sliderTimer;
var slideWidth=-$(window).width();//-1424 0
var translateWidth = -$('.viewport').width();

$(document).ready(function() {
   var switchInterval = setInterval(nextSlide, interval);
   sliderTimer=setInterval(nextSlide,interval);
   $('.viewport').hover(function(){
    clearInterval(sliderTimer);
});

   $('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != currentSlide) {
       clearInterval(sliderTimer);
       translateWidth = -$('.viewport').width() * (navBtnId);
       $('.slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
 // $('.slidewrapper').css('right',translateWidth);  
 $('#butImg' + currentSlide).attr("src","");
 currentSlide = navBtnId + 1;
 $('#butImg' + currentSlide).attr("src","images/Rectangle 2.png");
}
});

   $('.enter').click(function() {
    $('.darkBackground').toggleClass("block");
    $('.authorization').show(500);

});

   $('.authoClose').click(function() {
     $('.darkBackground').toggleClass("block");
     $('.authorization').hide(500);
 });
   $('#maxSymbols').html(maxSymbolsTextarea);
   var cnt = maxSymbolsTextarea;
   $('.placeholderNews').keyup(function() {
    var revText = this.value.length;
    if (this.value.length > maxSymbolsTextarea)
        this.value = this.value.substr(0, maxSymbolsTextarea);
    cnt = (maxSymbolsTextarea - revText);
    if (cnt <= 0) {
        $("#counter").html('0');
    }
    else { 
        $("#counter").html(cnt);
    }
});

   $('.addNewsBtn').click(function() {
    if (cnt == maxSymbolsTextarea) {
     $('.placeholderNews').addClass('redColorTextarea');
 }
});

   $('.imgClose').click(function() {
      //  console.log($(this).parent());
      $('#preview').children().remove();
      var doc = document.getElementById('previewName');
      doc.innerHTML = null;
      $('.imgClose').css({"opacity": '0'});
  });

});


function nextSlide(){
    console.log("next");
    currentSlide++;
    debugger;
    if(currentSlide>=$('.slidewrapper').children().size())
    { 
        translateWidth = -$('.viewport').width() * (currentSlide-2);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
      //  $('.slidewrapper').css('right',translateWidth);  
      $('.slidewrapper').append($('.slidewrapper').children().last().clone()); 
      $('.slidewrapper').children().last().remove();
       // navBtnId = $(this).index();
       $('#butImg' + 2).attr("src","");
       // currentSlide = 0 + 1;
       $('#butImg' + 1).attr("src","images/Rectangle 2.png");
       currentSlide=0;   
   }else{
       $('#butImg' + 1).attr("src","");
       // currentSlide = 0 + 1;
       $('#butImg' + 2).attr("src","images/Rectangle 2.png");
   }

   $('.slidewrapper').animate({right: -currentSlide*slideWidth},200).data('current',currentSlide);
 //$('.slidewrapper').css('right',0);  

   // currentSlide--;  
   // if(currentSlide<=0){

   //      $('.slidewrapper').css('right',-(currentSlide+1)*slideWidth);  
   //      $('.slidewrapper').prepend($('.slidewrapper').children().last().clone()); 
   //      $('.slidewrapper').children().last().remove();
   //      currentSlide++;   
   //  }
   //  $('.slidewrapper').animate({right: -currentSlide*slideWidth},300).data('current',currentSlide);
}

function uploadMiniImg(img) {
    //debugger;
    var fls = img.files;
    if(!fls || !fls.length || !FileReader) {
        return;
    }
    var doc = document.getElementById('previewName');

    if(!/\.(jpg|png|jpeg)$/.test(fls[0].name)){
        doc.innerHTML = "Неверный формат изображения";
        $('#previewName').css({"color":" #FF2323",});
        return;
    }
    $('#previewName').css({"color":" #000",});
    doc.innerHTML = null;
    doc.innerHTML = fls[0].name;
    var fr = new FileReader();
    fr.onload = function() {
        var im = new Image();
        im.src = this.result;
        im.width = 34;
        im.height= 34;
        
        var doc1 = document.getElementById('preview');
        var $doc2 = $('#preview');
        doc1.append(im);
       // $doc2.html(im);
   };
   fr.readAsDataURL(fls[0]);
   var doc = document.getElementById('previewName');
   doc.innerHTML = fls[0].name;

   $('.imgClose').css({"opacity": '1'});
}