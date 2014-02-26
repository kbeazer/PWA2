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
		$(this).animate({
			opacity: 1, 
			height: 210
		}, 500)
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

	$('#ctaButton a').hover(function(){
		$(this).css('background-color', '#0085B2');
	},function(){
		$(this).css('background-color', '#FF8200')
	});

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

	$('#tagline').css('opacity', '.5')
	$('#tagline').mouseover(function(){
		$(this).fadeTo(1000, 1);
		$(this).css('fontSize', 30);
		$(this).css('paddingBottom', 52);
		// $(this).css('zIndex', 2);
	});
	$('#tagline').mouseout(function(){
		$(this).fadeTo(1000, .5);
		$(this).css('fontSize', 24);
		$(this).css('paddingBottom', 60);
	});

	$('#get-started, #find-job').on('click', function(){
		html('<a href="index.html"></a>').append(this);
	});	

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
					window.location.assign('dashboard.html');
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

 