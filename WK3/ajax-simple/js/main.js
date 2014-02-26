/*
Description: DESCRIPTION INFO GOES HERE
1Main.js
*/

$(function(){
	$.ajax({
		url:'xhr/list.php', 
		type: 'get',
		dataType: 'json',
		success: function(response){
			var langs= response.languages;
			var html= '';
			for(var i=0, max=langs.length; i<max; i++){
				html+= '' + 
				'<div class="languages">' + 
					'<h2>' + langs[i].name + '</h2>' +
					'<p id="descrip">' + langs[i].description + '</p>' +
					'<p id="version">' + langs[i].version + '</p>' +
				'</div>';
			};
			$('#languages').append(html);
		};
	});

});