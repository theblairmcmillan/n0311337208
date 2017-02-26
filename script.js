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
