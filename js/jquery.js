var slideNow = 1;
var slideCount = $('.slidewrapper').children().length;
var interval = 1000;
var navBtnId = 0;
var translateWidth = 0;
var maxSymbolsTextarea = 150;
var currentSlide=1;
var sliderTimer;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, interval);
sliderTimer=setInterval(nextSlide,1000);
    $('.viewport').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(prevSlide,1000);
    });
    // $('.viewport').hover(function() {
    //     clearInterval(switchInterval);
    // }, function() {
    //     switchInterval = setInterval(nextSlide, interval);
    // });


    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
             clearInterval(sliderTimer);
            translateWidth = -$('.viewport').width() * (navBtnId);
            $('.slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            $('#butImg' + slideNow).attr("src","");
            slideNow = navBtnId + 1;
            $('#butImg' + slideNow).attr("src","images/Rectangle 2.png");
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
        $(this).parent().remove(); 
    });

});

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size())
    {
        $('.slidewrapper').css('left',-(currentSlide-2)*slideWidth);  
        $('.slidewrapper').append($('.slidewrapper').children().first().clone()); 
        $('.slidewrapper').children().first().remove();
        currentSlide--;                        
    }
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
    
    
}

function prevSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        $('.slidewrapper').css('left',-(currentSlide+2)*slideWidth);  
        $('.slidewrapper').prepend($('.slidewrapper').children().last().clone()); 
        $('.slidewrapper').children().last().remove();
        currentSlide++;   
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}



var slideWidth=-$('.viewport').width();
function nextSlide1() {


   if(currentSlide>=slideCount)
   {//abs-2sl
        $('.slidewrapper').css('right',-(currentSlide-2)*slideWidth);  


        // $('.slidewrapper').append($('.slidewrapper').children().first().clone()); 
        $('.slidewrapper').children().first().remove();
        currentSlide--;  
        $('#butImg' + slideNow).attr("src","");
        $('#butImg' + slideNow).attr("src","images/Rectangle 2.png");               

    } else {//1sl
        $('.slidewrapper').css('right',-(currentSlide+2)*slideWidth);  
        $('.slidewrapper').prepend($('.slidewrapper').children().last().clone()); 
        $('.slidewrapper').children().last().remove();

        currentSlide++; 
        $('#butImg' + slideNow).attr("src","");
        $('#butImg' + slideNow).attr("src","images/Rectangle 2.png");

    }

$('.slidewrapper').animate({right: -currentSlide*slideWidth},300).data('current',currentSlide);
}


function uploadMiniImg(img) {
    var fls = img.files;
    if(!fls || !fls.length || !FileReader) {
        return;
    }
    var fr = new FileReader();
    fr.onload = function() {
        var im = new Image();
        im.src = this.result;
        im.width = 34;
        im.height= 34;
        var doc = document.getElementById('preview');
        doc.replaceChild(im, doc.firstChild);
    };
    fr.readAsDataURL(fls[0]);
    var doc = document.getElementById('previewName');
    doc.innerHTML = fls[0].name;
    
    $('.imgClose').css({"opacity": '1'});
}