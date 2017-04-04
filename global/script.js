$(document).ready(function(){

	var balloonColors = ["red", "blue", "yellow", "orange", "green"];
	var balloonCount = 0
	var balloonCoefficient = 5;
	var bigBalloonCoefficient = 4;
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	$spawnBalloon = function(sizeMultiplier) {
		ranNum = Math.floor(Math.random()*5);
		if (ranNum == 5){ranNum = 4};
		$("body").append("<img src='http://24h-birthday.run/global/"+balloonColors[ranNum]+"-balloon.png' id='balloon"+balloonCount+"' class='balloon'/>");
		var balloonSpawnX = Math.floor(Math.random()*screenWidth);
		var flightTime = 4000+Math.floor(Math.random()*4)*800*bigBalloonCoefficient;
		$("#balloon"+balloonCount).css("height", (sizeMultiplier*100) + "px");
		$("#balloon"+balloonCount).css("left", balloonSpawnX);
		$("#balloon"+balloonCount).css("top", screenHeight+"px");
		$("#balloon"+balloonCount).animate({top: ((-1)*sizeMultiplier*100) + "px"}, flightTime, "linear", function(){$(this).remove();})
		balloonCount++;
	};
	
	setInterval(function(){
			if(Math.floor(Math.random()*bigBalloonCoefficient) == 0) {
				$spawnBalloon(2);
			} else {
				$spawnBalloon(1);
			};
		}, 6000/balloonCoefficient);

});
