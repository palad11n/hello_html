var maxSymbolsTextarea = 150;

$(document).ready(function() {
  // $('.enter').click(function() {
  //   $('.darkBackground').toggleClass("block");
  //   $('.authorization').show(500);
  // });
 //  $('.authoClose').click(function() {
 //   $('.darkBackground').toggleClass("block");
 //   $('.authorization').hide(500);
 // });

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

function uploadMiniImg(img) {
    //debugger;
    var fls = img.files;
    if(!fls || !fls.length || !FileReader) {
      return;
    }
    var doc = document.getElementById('previewName');

    if(!/\.(jpg|png|jpeg)$/.test(fls[0].name)){
      doc.innerHTML = "Неверный формат изображения";
      $('#previewName').css({"color":" #FF2323",
        "font-weight": "600",});
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
     $('#previewName').css({"font-weight": "100",});
     $('.imgClose').css({"opacity": '1'});
   }