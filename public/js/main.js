$(document).on("ready",
	function(){
		$(".boton-individual").on("click",
			function(e){
				e.preventDefault();
				$(".terapia-individual").css({display: "block"});
		});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".terapia-individual").css({display: "none"});
			});	
		$(".boton-terapia-pareja").on("click",
			function(e){
				e.preventDefault();
				$(".terapiadepareja").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".terapiadepareja").css({display: "none"});
			});
		$(".boton-infantil").on("click",
			function(e){
				e.preventDefault();
				$(".terapia-infantil").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".terapia-infantil").css({display: "none"});
			});
});
