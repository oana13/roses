$(document).ready(function(){
var paused = false;
var images = ["http://i244.photobucket.com/albums/gg29/oana13/roses/roses2.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses7.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses9.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses5.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses3.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses1.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses4.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses10.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses8.png",
"http://i244.photobucket.com/albums/gg29/oana13/roses/roses6.png"];
var counter = 0;
console.log(counter, paused);

$("#bigImage").on("click", function (){
	console.log(counter, paused);
	paused = !paused;
});

setInterval(function (){
	// first check if it is paused
	if(!paused){
		$("#forward").click();
	};
}, 3000);

$("#backward").click(function (){
	console.log(counter);
	// go back one in the counter
	
	// if we are below 1 (the first image) loop round to the last image)
	if(counter < 1){
		counter = images.length - 1;
	}
	else{
		counter = counter - 1;
	}
	// load next image into the big image
	$("#bigImage").attr('src', images[counter]);
});

// when you click on the backwards button select the next image
$("#forward").click(function (){
	// go forward one in the counter
	
	// if we are above (the last image) loop round to 1 (the first image)
	if(counter > images.length-2){
		counter = 0;
	}
	else{
		counter = counter + 1;
	}
	// load next image into the big image
	$("#bigImage").attr('src', images[counter]);
});

});