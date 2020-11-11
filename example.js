var total_time_watched = 0;
var before_seconds = 0;

$( document ).ready(function() {
		
	var iframe_embed = document.querySelector('#iframe_embed');
    var iframe_embed_player = new Vimeo.Player(iframe_embed);
	
	var div_with_html_player = new Vimeo.Player('div_with_html');
	
	var div_with_js_options = {
		id: 9011932
	};
	var div_with_js_player = new Vimeo.Player('div_with_js', div_with_js_options);
	
	iframe_embed_player.on('play', function(e) {
		before_seconds = e.seconds;
    });
	div_with_html_player.on('play', function(e) {
		before_seconds = e.seconds;
    });
	div_with_js_player.on('play', function(e) {
		before_seconds = e.seconds;
    });

	iframe_embed_player.on('timeupdate', function(e) {
		add_to_total(e);
    });
	
	div_with_html_player.on('timeupdate', function(e) {
		add_to_total(e);
    });
	
	div_with_js_player.on('timeupdate', function(e) {
		add_to_total(e);
    });

});

function add_to_total(e) {
	console.log(total_time_watched);
	total_time_watched += (e.seconds - before_seconds);
	before_seconds = e.seconds;
	console.log('Total time watched: ' + total_time_watched + ' seconds');
}
