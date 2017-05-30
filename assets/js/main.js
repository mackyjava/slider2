var target =0;
$(document).ready(function(){
	$(".control").click(function(){
		target = $(this).data("target");
	    mostrarImagen(target);
	});
	$(".previous").click(function(e){
        e.preventDefault();
        target= target-1;
 	    target =(target < 0) ? 3 : target;
 	    mostrarImagen(target); 
	});
	$(".next").click(function(e){
		e.preventDefault();
		target= target +1;
 	    target =(target > 3) ? 0 : target;
 	    mostrarImagen(target);

	});
	var mostrarImagen= function(target){
 	var lastSlide= $("div.active").removeClass("active");
 	var slide = $("div[data-slide='"+ target +"']").addClass("active");    
 };
});