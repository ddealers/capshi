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
		$(".boton-terapia-infantil").on("click",
			function(e){
				console.log("click");
				e.preventDefault();
				$(".ter-infa-juvenil").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-infa-juvenil").css({display: "none"});
			});
		$(".boton-familia").on("click",
			function(e){
				e.preventDefault();
				$(".ter-familiar").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-familiar").css({display: "none"});
			});
		$(".boton-acupuntura").on("click",
			function(e){
				e.preventDefault();
				$(".acupuntura").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".acupuntura").css({display: "none"});
			});
		$(".boton-bioenergetica").on("click",
			function(e){
				e.preventDefault();
				$(".ter-bio").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-bio").css({display: "none"});
			});
		$(".boton-auri").on("click",
			function(e){
				e.preventDefault();
				$(".ter-auri").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-auri").css({display: "none"});
			});
		$(".boton-masaje").on("click",
			function(e){
				e.preventDefault();
				$(".ter-masaje").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-masaje").css({display: "none"});
			});
		$(".boton-constelaciones").on("click",
			function(e){
				e.preventDefault();
				$(".ter-constelaciones").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-constelaciones").css({display: "none"});
			});
		$(".boton-herbolaria").on("click",
			function(e){
				e.preventDefault();
				$(".ter-herbolaria").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-herbolaria").css({display: "none"});
			});
		$(".boton-zen").on("click",
			function(e){
				e.preventDefault();
				$(".ter-meditacion").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-meditacion").css({display: "none"});
			});
		$(".boton-floral").on("click",
			function(e){
				e.preventDefault();
				$(".ter-floral").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-floral").css({display: "none"});
			});
		$(".boton-aromaterapia").on("click",
			function(e){
				e.preventDefault();
				$(".ter-aromaterapia").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".ter-aromaterapia").css({display: "none"});
			});
});
