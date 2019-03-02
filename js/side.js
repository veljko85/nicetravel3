
$(document).ready(function()	{

    	$("a").click( function(){

		$(".section").show();	
		
		$(".load-btn-wrap").show();
	        $(".load-btn-wrap").delay(700).fadeOut();

	        $(".section2").load($(this).attr("href")).hide().fadeIn();
            	return(false); 

    	}); 


}); 