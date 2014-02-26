// $('.overlay, .modal').show();

$(document).ready(function(){
	$('.sgnin_btn').click(function(){
		$('.overlay, .modal').show();
	});

	// $('#webLogo').mouseover(function(){
	// 	$(this).toggle('scale', '1.1');
	// });
	// $('#webLogo').mouseout(function(){
	// 	$(this).toggle('scale');
	// });

	$('.details').css("opacity","0");
	$('.details').hover(function(){		
		$(this).animate({opacity: 1, height:210}, 500);
	},function(){
		$(this).animate({opacity: 0, height:.1}, 1000);
	});

	$('#get-started, #find-job').hover(function(){
		$(this).css('background-color', '#0085B2');
	},function(){
		$(this).css('background-color', '#FF8200')
	});

	$('#top-nav a').hover(function(){
		$(this).css('background-color', '#FF8200');
	},function(){
		$(this).css('background-color', '#19C5FF')
	});

	$('#projects a').hover(function(){
		$(this).css('color', '#FF8200');
	},function(){
		$(this).css('color', '#0085B2')
	});

	$('#developer a').hover(function(){
		$(this).css('color', '#FF8200');
	},function(){
		$(this).css('color', '#0085B2')
	});

	$('#ctaButton a').hover(function(){
		$(this).css('background-color', '#0085B2');
	},function(){
		$(this).css('background-color', '#FF8200')
	});

	$('#tagline').mouseover(function(){
		$(this).fadeTo(1000, 1);
	});
	$('#tagline').mouseout(function(){
		$(this).fadeTo(1000, .3);
	});

	$('.overlay, #cancelButton').click(function(){
		$('.overlay').hide();
		$('.modal').hide();
	});

	$('#signinButton').click(function(e){
		var user = $('#user').val();
		var pass = $('#pass').val();

		console.log(user);
		console.log(pass);
		alert('i was clicked');
		
		e.preventDefault();
		
		$.ajax({
			url:'xhr/login.php', 
			type: 'post',
			dataType: 'json',
			data: {
				username: user,
				password: pass
			},

			success: function(result){
				console.log('result');	
			}	
		});




	});
});

 