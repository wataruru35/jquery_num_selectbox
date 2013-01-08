(function( $ ) {
  $.fn.num_selectbox = function() {
    
       var min =  Number($(this).attr("min"));
       var max =  Number($(this).attr("max"));
       var select = Number($(this).attr("select"));

       for (i = min; i <= max; i++){
       
	       if(i == select){
	       
	       
	        $(this).prepend('<option value="'+i+'" selected>'+i+'</option>');
		    
		       
	       }else{
		       
		   
		    $(this).prepend('<option value="'+i+'">'+i+'</option>');
	  
	       }
           
	     
	   }
       


  };
})( jQuery );