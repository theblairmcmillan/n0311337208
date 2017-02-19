
var inst = $('[data-remodal-id=modal]').remodal(); 


$(window).scroll(function() {
   	if ($(document).scrollTop() > 300 && $("#remodal").attr("displayed") === "false") {
		inst.open();
		$("#remodal").attr("displayed", "true")
   	}
});