// Add a Tabbed Navigation
// 1. Hide all the modules.
// 2. Create an unordered list element before the first module.
// 3. Iterate of the modules using $.fn.each.  For each module, use the text of the h2 element.
// 4. Bind a click event to the list item that:
//     A. Shows the related module, and hides any other modules
//     B. Adds a class of "current" to the clicked list item
//     C. Removes the class of "current" to the clicked list item
// 5. Finally, show the first tab.

$(document).ready(function(){
	console.log('anything');
	$('.module').hide();
	$('#blog').before('<ul class="nav"></ul>');
	
	$('.module').each(function(index){
		$('.nav').append('<li><h2>' + $(this).attr('id') + '</h2></li>');
	});
	
	$('.nav li').click(function(){
		$(".module").hide();
		if($(this).find('h2').html() === "blog"){
			
			$('#blog').show();
		}else if($(this).find('h2').html() === "specials"){
			$('#specials').show();
		}
	});

});