$(function(){
	
	$( window ).mousemove(function(e){

		var pageX = $( window ).width();
		var middleX = pageX / 2;
		var pageY = $( window ).height();
		var middleY = pageY / 2;
		
		var x = e.pageX;//Horizontal
		var y = e.pageY;//Vertical

		var ratio = pageY/30000;
		var desX = x - middleX;
		var desY = y - middleY;

		// Check if the eyes are in the eyeball area
		if( Math.pow(desX, 2) + Math.pow(desY, 2) < Math.pow(middleY, 2) ) {
			moveEyes(desX, desY, ratio);
		} else {
			// calculate the angle and move the eyes on the max range on this angle
			var rad = Math.atan2(desX, desY);
			var desX = Math.sin(rad) * middleY;
			var desY = Math.cos(rad) * middleY;

			moveEyes(desX, desY, ratio);
		}
	});

	function moveEyes(desX, desY, ratio){
		var desX = desX * ratio;
		var desY = desY * ratio;

		$("#eyes").css('margin-left', desX);
		$("#eyes").css('margin-right', (desX * -1));
		$("#eyes").css('margin-top', desY);
		$("#eyes").css('margin-bottom', (desY * -1));
	}
})