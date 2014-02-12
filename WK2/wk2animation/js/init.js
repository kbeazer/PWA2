// Fades out text whenever its clicked
$("#casper").click(function(){
	$("#casper").fadeOut("fast");
});

// Loads the image before the page loads
$(document).ready(function(){
	alert("I'm loaded!");
	$("img").load(function(){
		alert("Here is the image");
	});
});

// Loads the iframes before the page loads
$(window).ready(function(){
	$("iframe").load(function(){
		alert("Iframes are loaded");
	});
});

