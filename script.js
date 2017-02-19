
var inst = $('[data-remodal-id=modal]').remodal(); 


$(window).scroll(function() {
   	if ($(document).scrollTop() > 3000 && $("#remodal").attr("displayed") === "false") {
		inst.open();
		$("#remodal").attr("displayed", "true")
   	}
});