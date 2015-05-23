$(document).on("ready",
	function(){
		$(".boton-individual").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to('.terapia-individual', 0.5, {y: 50, bottom:-50, opacity:1});
				$(".terapia-individual").css({display: "block",});
		    });
		$(".im-cierre").on("click", function(e){
				e.preventDefault();
				TweenLite.to(".terapia-individual", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".terapia-individual").css({display: "none"});
				}});
			});	

//------------		
		$(".boton-terapia-pareja").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to('.terapiadepareja', 0.5, {y: 50, bottom:-50, opacity:1});
				$(".terapiadepareja").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".terapiadepareja", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".terapiadepareja").css({display: "none"});
				}});
			});

//------------				
		$(".boton-terapia-infantil").on("click",
			function(e){
				console.log("click");
				e.preventDefault();
				TweenLite.to(".ter-infa-juvenil", 0.5, {y: 50, bottom:-50, opacity:1});
					$(".ter-infa-juvenil").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-infa-juvenil", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-infa-juvenil").css({display: "none"});
				}});
			});

//------------		
		$(".boton-familia").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-familiar", 0.5, {y: 50, bottom:-50, opacity:1});
				$(".ter-familiar").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-familiar", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-familiar").css({display: "none"});
				}});
			});

//------------		
		$(".boton-acupuntura").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".acupuntura", 0.5, {y: 50, bottom:-50, opacity:1});
				$(".acupuntura").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".acupuntura", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".acupuntura").css({display: "none"});
				}});
			});
//------------		
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
//------------		
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
//------------		
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

//------------		
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

//------------		
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

//------------		
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

//------------		
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

//------------		
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

//------------		
		$("#im-tel").on("mouseover",
			function(){
				$("#num").css({display: "block"});			
			});
		$("#im-tel").on("mouseleave",
			function(){
				$("#num").css({display: "none"});
			});
//------------	//------------	MENU //------------	//------------	
	$('.menu-servicio').on('click', function(){
		$("#servicios").css({opacity: 0, onComplete: function(){
			TweenLite.to('#servicios', 0.5, {opacity:1});
		}});
	});
	$('.menu-terapias').on('click', function(){
		$("#terapias").css({opacity: 0, onComplete: function(){
			TweenLite.to('#terapias', 0.5, {opacity:1});
		}});
	});
	$('.menu-contacto').on('click', function(){
		$("#contacto").css({opacity: 0, onComplete: function(){
			TweenLite.to('#contacto', 0.5, {opacity:1});
		}});
	});
//------------	//------------	FOOTER ICONS //------------	//------------
	$('.titleSocial').on('mouseover', function(){
		TweenLite.to('.iconSocial', 0.2, {y: 0, bottom: 0, opacity:1});
		$('.iconSocial').css({display: 'block'});
	});
	$(".iconSocial").on("mouseleave", function(e){
		TweenLite.to(".iconSocial", 0.2, {y: 0, bottom:-85, opacity:0, onComplete: function(){
			$(".iconSocial").css({display: "none"});
		}});
	});
});


