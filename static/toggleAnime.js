$(document).ready(function () {

$('.ham').click(function() {
  var x = document.getElementById('tDiv');
  if(x.style.display === "none"){
  	x.style.display = "block";
  	$('.tDiv').addClass('col-md-2 col-lg-2');
 	$('.training').addClass('col-md-4 col-lg-4');
 	$('.chatSession').addClass('col-md-6 col-lg-6'); 
 	$('.training').removeClass('col-md-5 col-lg-5');
 	$('.chatSession').removeClass('col-md-7 col-lg-7'); 		
  }
  else{
  	x.style.display = "none";
  	$('.tDiv').removeClass('col-md-2 col-lg-2');
  	$('.training').removeClass('col-md-4 col-lg-4');
 	$('.chatSession').removeClass('col-md-6 col-lg-6'); 	
 	$('.training').addClass('col-md-5 col-lg-5');
 	$('.chatSession').addClass('col-md-7 col-lg-7'); 	
  }
});

$('.agentDiv').click(function(){
	$('.rightChevron').removeClass('glyphicon-chevron-right')
	$('.rightChevron').addClass('glyphicon-chevron-down');
})

});