
		

		$("#play").click(function(){
			$("#audio-player")[0].play();
			$("#message").text("Playing");
			$("#pause").click(function(){
			$("#audio-player")[0].pause();
			$("#message").text("Paused");
			event.preventDefault();
		});
		});
		
		
			
		$("#stop").click(function(){
			$("#audio-player")[0].pause();
			$("#audio-player")[0].currentTime = 0;
			$("#message").text("Stopped");
			event.preventDefault();
		});
		

