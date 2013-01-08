(function( $ ) {
  $.fn.num_selectbox = function(min,max,select) {
    

       for (i = min; i <= max; i++){
       
	       if(i == select){
	       
	       
	        $(this).prepend('<option value="'+i+'" selected>'+i+'</option>');
		    
		       
	       }else{
		       
		   
		    $(this).prepend('<option value="'+i+'">'+i+'</option>');
	  
	       }
           
	     
	   }
       

  };
})( jQuery );