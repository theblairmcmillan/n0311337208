$( document ).ready(function() {
  var is_mobile = false;

  if ( $("#remodal").css('display') == 'none') {
      is_mobile = true;
  }

  // now i can use is_mobile to run javascript conditionally

  if (is_mobile == false) {
      //Conditional script here
      var options = {
        hashTracking: false
      }
      var inst = $('[data-remodal-id=modal]').remodal(options);

      $(window).scroll(function() {
        if ($(document).scrollTop() > 2700 && $("#remodal").attr("displayed") === "false") {
          inst.open();
          $("#remodal").attr("displayed", "true")
        }
      });
    }
 });


//fadez // 
new WOW().init();