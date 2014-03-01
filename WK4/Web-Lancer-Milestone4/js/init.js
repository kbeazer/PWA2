// $('.overlay, .modal').show();

$(document).ready(function(){
	$('.sgnin_btn').click(function(){
		$('.overlay').fadeTo(500, .5);
		$('.modal').fadeIn(500);
	});

	$('.overlay').click(function(){
		$('.overlay').fadeOut(500);
		$('.modal').fadeOut(500);
	});

	$('#webLogo').mouseover(function(){
		$(this).animate({
			width: 226,
			height: 260
		});
	});
	$('#webLogo').mouseout(function(){
		$(this).animate({
			width: 200,
			height: 230
		});
	});  

	$('.details').css("opacity","0");
	$('.details').hover(function(){		
		$(this).stop(true, false).animate({
			opacity: 1, 
			height: 210
		}, 500);
	},function(){
		$(this).animate({
			opacity: 0, 
			height: .1
		}, 1000);
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

	// Landing Page testimonial Slider --start--	
	$('#intro div').hide().eq(0).show();

	(function(quotes) {
	    var i = 0;
	    if (!quotes.length) {
	        return false;
	    }
	    function nextQuote() {
	        quotes.eq(i).animate({opacity:'toggle', top:'40px'}, 500)
	        if (++i >= quotes.length) {
	            i = 0;
	        };
	        quotes.eq(i).delay(2000).animate({opacity:'toggle', top:'40px'}, 500)
	        setTimeout(nextQuote, 4000);
	    }
	    nextQuote();
	}
	($('#intro').children()));
	// Landing Page testimonial Slider --end--

	// Dashboard Page selector buttons --start--
	$('#ctaButton a').hover(function(){
		$(this).css('background-color', '#0085B2');
	},function(){
		$(this).css('background-color', '#FF8200')
	});
	// Dashboard Page selector buttons --end--

	$('a[href="registration.html"]').hover(function(){
		$(this).css('background-color', '#FF8200');
	},function(){
		$(this).css('background-color', '#00BEFF')
	});

	$('.sgnin_btn').hover(function(){
		$(this).css('background-color', '#FF8200');
	},function(){
		$(this).css('background-color', '#00BEFF')
	});

	// Tagline Font and Opacity change --start--
	$('#tagline').css('opacity', '.5')
	$('#tagline').mouseover(function(){
		$(this).animate({
			opacity: 1,
			fontSize: 30,
			paddingBottom: 52
		});
	});
	$('#tagline').mouseout(function(){
		$(this).fadeTo(100, .8);
		$(this).animate({
			fontSize: 24,
			paddingBottom: 60
		});
	});
	// Tagline Font and Opacity change --end--

	// Opacity Change when Image is hovered --start--
	$('#clients > a').hover(function(){
		$('#slide').css({
			opacity: .5
		});
		$('.layout > h2').css({
			opacity: 0
		});
	}, function(){
		$('#slide').css({
			opacity: 1
		});
		$('.layout > h2').css({
			opacity: 1
		});
	});
	// Opacity Change when Image is hovered --end--

	// Animation when Image is clicked --start--
	$('#clients').click(function(e){
		e.preventDefault();

		$('#slide').animate({
			opacity: 0,
			height: .1,
			marginTop: 400
		});
		$('.layout > h2').hide();
		$('#clients').css({
			height: 383
		});
		$('.layout').css({
			height: 453
		});
		$('#pHide').fadeIn(1000);
	});
	// Animation when Image is clicked --end--

	

	$('#register').on('click', function(){
		var firstname= $('#first').val(),
			lastname= $('#last').val(),
			username= $('#userName').val(),
			email= $('#email').val(),
			password = $('#password').val();
			console.log(firstname+' '+lastname+' '+username+' '+email+' '+password);

		$.ajax({
			url:'xhr/register.php', 
			type: 'post',
			dataType: 'json',
			data: {
				firstname: firstname,
				lastname: lastname,
				username: username,
				email: email,
				password: password	
			},

			success: function(response){
				if (response.error){
					alert(response.error);	
				}else{
					window.location.assign('index.html');
				}	
			}	
		});
	});

	$('#cancelButton').click(function(){
		$('.modal, .overlay').hide();
	});
	
	$('#signinButton').click(function(){
		var user = $('#user').val();
		var pass = $('#pass').val();
		console.log("herro");
		$.ajax({
			url:'xhr/login.php', 
			type: 'post',
			dataType: 'json',
			data:{
				username: user,
				password: pass
			},
			success: function(response){
				console.log('Username= '+user+' |'+ ' Password= '+pass);
				if (response.error){
					alert(response.error);	
				}else{
					window.location.assign('dashboard.html')
				};	
			}	
		});
	});

	$('#logOut').click(function(e){
		e.preventDefault;
		$.get('xhr/logout.php', function(){
			window.location.assign('index.html')
		})
	});
});

 