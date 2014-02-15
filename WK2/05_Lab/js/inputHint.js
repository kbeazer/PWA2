// Create an Input Hint

// 1. Set the value of the search to input to the text of the label element
// 2. Add a class of "hint" to the search input
// 3. Remove the label element
// 4. Bind a focus event to the search input that removes the hint text and the "hint" class
// 5. Bind a blur event to the search input that restores the hint text and "hint" class if not search text was entered.
// 6. What other considerations might there be if you were creating this functionality for a real site?



$(document).ready(function(){
	$('.input_text').val('Please enter your search here');
	$(this).addClass('hint');
	$('label').remove();
	$('input').focusin(function(){
		$('.input_text').removeClass('hint');
		$('.input_text').val('');	
	});
	$('input').focusout(function(){
		$('.input_text').addClass('hint');
		$('.input_text').val('Please enter your search here');	
	});
});

