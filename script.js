$(function(){
	
	$( window ).mousemove(function(e){

		var pageX = $( window ).width();
		var middleX = pageX / 2;
		var pageY = $( window ).height();
		var middleY = pageY / 2;
		
		var x = e.pageX;//Horizontal
		var y = e.pageY;//Vertical

		var ratio = pageY/30000;

		var desX = (x - middleX) * ratio;
		var desY = (y - middleY) * ratio;
		
		
		console.log(desX);
		console.log(desY);
		console.log(ratio);
		
		$("#eyes").css('margin-left', desX);
		$("#eyes").css('margin-top', desY);

		// console.log(pageX);
		// console.log(pageY);
		// console.log(x);
		// console.log(y);

	});
})