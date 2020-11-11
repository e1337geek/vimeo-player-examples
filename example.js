var total_time_watched = 0;
var before_seconds = 0;

$( document ).ready(function() {

	//Create Vimeo Player object from existing iframe embed by selector
	var iframe_embed = document.querySelector('#iframe_embed');
	var iframe_embed_player = new Vimeo.Player(iframe_embed);
	
	//Create Vimeo Player object from empty <div> using data-vimeo-id HTML attribute
	var div_with_html_player = new Vimeo.Player('div_with_html');
	
	//Create Vimeo Player object from empty div using JS object to set options
	var div_with_js_options = {
		id: 9011932
	};
	var div_with_js_player = new Vimeo.Player('div_with_js', div_with_js_options);
	
	//Event listeners to set current time on play of video
	iframe_embed_player.on('play', function(e) {
		before_seconds = e.seconds;
	});
	div_with_html_player.on('play', function(e) {
		before_seconds = e.seconds;
	});
	div_with_js_player.on('play', function(e) {
		before_seconds = e.seconds;
	});

	//Event listeners to add to total time watched while videos are playing
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

//Function to add watch time since last event to total time watched
function add_to_total(e) {
	console.log(total_time_watched);
	total_time_watched += (e.seconds - before_seconds);
	before_seconds = e.seconds;
	console.log('Total time watched: ' + total_time_watched + ' seconds');
}
