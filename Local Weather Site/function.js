
// getting the location from Json api

$(document).ready(function(){

	// getting the coordenates
	var lon, lat;

	$.ajax({
		type: 'GET',
		url: 'http://ip-api.com/json',
		success: function(data){
			lon = data.lon;
			lat = data.lat;

			$('#location').animate({opacity: 0},50, function(){
				$('#location').animate({opacity: 1},50);
				$('#location').html(data.city +','+ data.countryCode);
			});

			dataHour();
		},
		error: function(){
			alert("Error: Not able to get your location");
		}
	});



	function dataHour(){
		var currentdate = new Date();
		var datetime = " " + currentdate.getFullYear()+ '-' + currentdate.getDate() + '-' + (currentdate.getMonth()+1);
		$('#data').html(datetime);
	};

	function clock(){
		var time = new Date();
		var hour = time.getHours();
		var minuts= time.getMinutes();
		var seconds = time.getSeconds();
		var meridium = '';




		if(minuts < 10){
			minuts = "0"+minuts;
		}

		if(seconds < 10){
			seconds = "0"+ seconds;
		}

		$('#hours').html(hour+ ':' + minuts + ':' + seconds );
	};
	setInterval(clock, 1000);
});
