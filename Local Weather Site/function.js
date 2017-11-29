
// getting the location from Json api

$(document).ready(function(){

	// getting the coordenates
	var urlString;

	$.ajax({
		type: 'GET',
		url: 'http://ip-api.com/json',
		success: function(data){
			urlString = 'https://fcc-weather-api.glitch.me/api/current?'+ 'lon=:'+ data.lon + '&lat=:' + data.lat;
			lon = data.lon;
			lat = data.lat;

			//displaying the location on the app
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


// getting the data of the day
	function dataHour(){
		var currentdate = new Date();
		var datetime = " " + currentdate.getFullYear()+ '-' + currentdate.getDate() + '-' + (currentdate.getMonth()+1);
		$('#data').html(datetime);
	};

// setting a clock to show the actuall time
	function clock(){
		var time = new Date();
		var hour = time.getHours();
		var minuts= time.getMinutes();
		var seconds = time.getSeconds();
		var meridium = '';


		if(hour > 12){
			meridium = "pm"
		}else{
			meridium = "am"
		}

		if(hour >= 12){
			hour -= 12;
		}else if(hours === 0){
			hour = 12;
		}

		if(minuts < 10){
			minuts = "0"+minuts;
		}

		if(seconds < 10){
			seconds = "0"+ seconds;
		}

		$('#hours').html(hour+ ':' + minuts + ':' + seconds + meridium);
	};
	//setInterval(clock, 1000); // updating the clock every second

	//getting the weather forecast for the day
	function getWeather(){
		$.ajax({
			type: 'GET',
			url: urlString,
			success: function(result){
				var celsiusTemp = Math.round(result.main.temp*10)/10;
				$('#temp').html(celsiusTemp);
				console.log(celsiusTemp);
			},
			error: function(){
				alert("not able the get the weather");
			}
		});
	}
	getWeather();
});
