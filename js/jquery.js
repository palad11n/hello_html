var slideNow = 1;
var slideCount = $('.slidewrapper').children().length;
var interval = 2000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, interval);

    $('.viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, interval);
    });


    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
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
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slidewrapper').css('transform', 'translate(0, 0)');
        $('#butImg' + slideNow).attr("src","");
        slideNow = 1;
        $('#butImg' + slideNow).attr("src","images/Rectangle 2.png");
        
    } else {
        translateWidth = -$('.viewport').width() * (slideNow);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
       
        $('#butImg' + slideNow).attr("src","");
        slideNow++;
        $('#butImg' + slideNow).attr("src","images/Rectangle 2.png");
    }
}