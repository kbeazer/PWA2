$(document).ready(function(){
	alert('Herro');
	$('div').addClass('hero');
	$('div').removeClass('hero');
	$('#toggleButton').click(function(){
		$('#disclaimer').toggle();
		if($('#disclaimer').is(':visible')){
			$(this).val('hide');
		}else{
			$(this).val('show');
		}
	});

});