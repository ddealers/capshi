$(document).on("ready",
	function(){
		$(".icono-terapia").on("click",
			function(e){
				e.preventDefault();
				$(".info-terapias").css({display: "block"});
		});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				$(".info-terapias").css({display: "none"});
		});	
});
