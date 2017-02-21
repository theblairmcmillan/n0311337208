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

    $(window).scroll(function() {
      if ($(document).scrollTop() > 760 && $("#remodal").attr("displayed") === "false") {
        inst.open();
        $("#remodal").attr("displayed", "true")
      }
    });
  }
});

//fadez // 
new WOW().init();


// Date formatting //

//Put our input DOM element into a jQuery Object
var $jqDate = jQuery('input[name="birthday"' || 'input[name="birthday2"]');

//Bind keyup/keydown to the input
$jqDate.bind('keyup','keydown', function(e){
  
  //To accomdate for backspacing, we detect which key was pressed - if backspace, do nothing:
  if(e.which !== 8) { 
    var numChars = $jqDate.val().length;
    if(numChars === 2 || numChars === 5){
      var thisVal = $jqDate.val();
      thisVal += '/';
      $jqDate.val(thisVal);
    }
  }
});

