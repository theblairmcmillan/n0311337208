$( document ).ready(function() {
  var is_mobile = false;

  if ( $("#buildingDiv").css('display') == 'none') {
    is_mobile = true;
  }

  // now i can use is_mobile to run javascript conditionally

  if (is_mobile == false) {
    //Conditional script here
    var options = {
      hashTracking: false
    }
    var inst = $('[data-remodal-id=modal]').remodal(options);

    setTimeout(function(){
      if ($("#remodal").attr("displayed") === "false") {
        inst.open();
        $("#remodal").attr("displayed", "true")
      }
    }, 10000);
  }
});

//fadez //
new WOW().init();



// Top Scroll //

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});