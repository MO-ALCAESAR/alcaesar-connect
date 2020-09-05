// Loading Spinner  
  $( window ).on( "load", function() {
  // Hide the loading
    if($('.loading-container').hide()){
       $('.content button').prop('disabled', false);
   }
  });


function copied_ms(kind){
    if (kind == "m3"){
    	kind = '#copied_ms_m3';
    } 
    if (kind == "en") {
    	kind = '#copied_ms_en';    	
    }

	$(kind).fadeIn();
	setTimeout(function(){ $(kind).fadeOut()}, 1500  );

}
