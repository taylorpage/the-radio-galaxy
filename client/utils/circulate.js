$(document).ready(function() {

	$(".planet").circulate({
	    speed: 2000,                  // Speed of each quarter segment of animation, 1000 = 1 second
	    height: 200,                 // Distance vertically to travel
	    width: 900,                  // Distance horizontally to travel
	    sizeAdjustment: 100,         // Percentage to grow or shrink
	    loop: true,                 // Circulate continuously
	    zIndexValues: [1000, 1000, 1000, 100]   // Sets z-index value at each stop of animation
	});
});