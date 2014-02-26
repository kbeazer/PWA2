// commons

$.fn.smartlabel = function(){
	return this.each(function(){
		var that = $(this),
			defval = that.attr('placetext'),
			color = that.css('color'),
			startval = that.val()
		;
		if(startval==='' || startval===defval){
			that.val(defval);
		}else{
			that.css('color', '#333');
		};
		that
			.bind('focus.placer ', function(){
				if(that.val()===defval){
					that.val('').css('color', '#333');
				};
			})
			.bind('blur.placer', function(){
				if(that.val()===''){
					that.val(defval).css('color', color);
				};
			})
		;
	});
};


// home script

var dossier = (function($){
	
	var dossier = {},
		landingPage,
		landingPromise,
		appPromise,
		appPage,
		appComponents,
		registerDialog,
		site,
		body,
		win,
		user
	;
	
	var checklogin = function(){
		$.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(r){
				if (r.user) {
					loadApp();
				}else{
					loadLanding();
					$('input, textarea').placeholder();
				};
			}
		});
	};
	
	var showLoginError = function(){
		$('#login-error-wrap').show();
		setTimeout(hideLoginError, 5000);
	};
	
	var hideLoginError = function(){
		$('#login-error-wrap').fadeOut(800);
	};
	

	var loadLanding = function(){
		var landing = $.get('templates/landingFINAL.html');
		$.when(landing).then(function(h){
			body.removeClass('app').addClass('home');
			site.empty().append(h);
			$('#login-user, #login-pass, #user-register-form input:not(:submit)').smartlabel();
		});
	};
	
	
	var loadApp = function(){
		var app = $.get('templates/app.html');
		$.when(app).then(function(h){
			body.removeClass('home').addClass('app');
			site.empty().append(h);
			getAllProjects();
		});
	};
	
	
	var activateProjects = function(sel){
		var projects = $(sel);
		projects.find('.detailstatus form').buttonset();
		
		projects.each(function(){
			var project = $(this);
			var id = project.attr("data-projectid");
			
			project.find('.tasktitle').editable('xhr/update_project.php', {
				name: 'projectName',
				submitdata: {
					projectID: id
				},
				callback: function(val){
					var json = $.parseJSON(val);
					$(this).text(json.project.projectName);
				}
			});
			
			project.find('.detailleft p').editable('xhr/update_project.php', {
				name: 'projectDescription',
				type: 'textarea',
				rows: 9,
				submitdata: {
					projectID: id
				},
				callback: function(val){
					var json = $.parseJSON(val);
					$(this).text(json.project.projectDescription);
				}
			});
			
		});
	};
	

	var getAllProjects = function(){
		$.ajax({
			url: 'xhr/get_projects.php',
			type: 'get',
			dataType: 'json',
			success: function(r){
				var html = $.render(r.projects, "tmpl-project");
				$(html).appendTo('#itemcontainer');
				activateProjects('.itemwrap');
			}
		});
	};
	

	var init = function(){
		
		$.fetcher([
			['templates/components.html #tmpl-project']
		]).then(checklogin);
		
	};
	
	
	$.ajaxSetup({
		cache: false,
		error: function(xhr){
			console.log(xhr);
		}
	});
	
	
	
	// LIVE EVENTS
	// =======================================================================================
	// =======================================================================================
	
	win = $(window);
	
	// #login-form, #login-user, #login-pass
	// LOGIN FORM
	
	win.on('submit', '#login-form', function(e){
		var user = $('#login-user').val();
		var pass = $('#login-pass').val();
		
		$.ajax({
			url: 'xhr/login.php',
			data: {
				username: user,
				password: pass
			},
			type: 'post',
			dataType: 'json',
			success: function(response){
				//console.log(response);
				if(response.error){
					showLoginError();
				}else{
					loadApp();
				};
			}
		});
		
		return false;
	});
	

	win.on('click', '#btn-logout', function(){
	
		$.get('xhr/logout.php', function(){
			loadLanding();
		});
		return false;
	});
	
	
	
	
	
	
	
	
	win.on("click", ".tasktitle", function(){
		return false;
	});
	
	win.on("click", ".itemdeleter", function(){
		return false;
	});
	
	win.on("click", ".itembox", function(){
		$(this).closest('.itembox').next().slideToggle();
		return false;
	});
	
	
	
	// LOGOUT BUTTON (#btn-logout)



	$(document).ready(function(){
		body = $(document.body);
		site = $('#site');
		init();
	});
	
	
	return dossier;
	
	
})(jQuery);



