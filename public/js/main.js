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
				TweenLite.to(".ter-bio", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-bio").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-bio", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-bio").css({display: "none"});
				}});
			});
//------------		
		$(".boton-auri").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-auri", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-auri").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-auri", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
				$(".ter-auri").css({display: "none"});
				}});
			});
//------------		
		$(".boton-masaje").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-masaje", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-masaje").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-masaje", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-masaje").css({display: "none"});
				}});
			});

//------------		
		$(".boton-constelaciones").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-constelaciones", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-constelaciones").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-constelaciones", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-constelaciones").css({display: "none"});
				}});			
			});

//------------		
		$(".boton-herbolaria").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-herbolaria", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-herbolaria").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-herbolaria", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-herbolaria").css({display: "none"});
				}});
			});

//------------		
		$(".boton-zen").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-meditacion", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-meditacion").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-meditacion", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-meditacion").css({display: "none"});
				}});
			});

//------------		
		$(".boton-floral").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-floral", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-floral").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-floral", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-floral").css({display: "none"});
				}});
			});

//------------		
		$(".boton-aromaterapia").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-aromaterapia", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-aromaterapia").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-aromaterapia", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-aromaterapia").css({display: "none"});
				}});
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
	$('.menu-home').on('click', function(){
		$("#home").css({opacity: 0, onComplete: function(){
			TweenLite.to('#home', 0.5, {opacity:1});
		}});
	});
//------------	//------------	VALIDACION FORM //------------	//------------
$('#form').submit(function(event) {
		var $form	= $(this);
		var name 	= $("#form-name").val();
		var mail 	= $form.find("#form-mail").val();
		var nameIsString	= /[A-Za-z\ ]+/.test(name);
		var emailIsValid	= /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(email);

		if(!name || !nameIsString){
			$("#form-name").addClass("rojo");
			$("form-name").val("");
			$("#dat-obli").css({display: "block"});
			return false;
		}else{
			$("#dat-obli").css({display: "none"});
		}
		if(!email|| !emailIsValid){
			$("#form-mail").addClass("rojo");
			$("#form-mail").val("");
			$(".incorrecto").css({display: "block"});
			$(".vacio").css({display: "none"});
			$(".correcto").css({display: "none"});
			$("#dat-obli").css({display: "block"});
			return false;
		}else{
			$(".correcto").css({display: "block"});
			$(".vacio").css({display: "none"});
			$(".incorrecto").css({display: "none"});
			$("#dat-obli").css({display: "none"});
		}

		$form.find('boton').prop('disabled', true);
		return false;
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


