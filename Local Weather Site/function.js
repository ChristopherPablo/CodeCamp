
// getting the location from Json api

$(document).ready(function(){

	// getting the coordenates with HTML API Geolocation
	function getLocation(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(savePosition);
		}
		else{
			alert("Geolocation is not supported by this browser.")
		}
	}
	// variables to store the url with the location included for the weather API


	function savePosition(position){
		var urlString = 'https://fcc-weather-api.glitch.me/api/current?'+ '&lat=' + position.coords.latitude  + '&lon='+ position.coords.longitude;
		getWeather(urlString);
	}

	//getting the weather forecast for the day
	function getWeather(urlString){
		$.ajax({
			type: 'GET',
			url: urlString,
			success: function(result){
				console.log(result);
				var celsiusTemp = Math.round((result.main.temp*10)/10);
				var fireTemp = Math.round(celsiusTemp * 9 / 5 + 32);
				$('#temp').html(fireTemp + "°");
				$('#location').html(result.name + ',' + result.sys.country);
				$('#weather').html(result.weather[0].main);
				$('#wind').html('Wind '+result.wind.speed);
				$('#humidity').html('humidity' + result.main.humidity);
				$('#temp_min').html('Temp min' + result.main.temp_min);
				$('#temp_max').html('Temp Max' + result.main.temp_max);
				dataHour();

			},
			error: function(){
				alert("not able the get the weather");
			}
		});
	}



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
	setInterval(clock, 1000); // updating the clock every second
	getLocation();


});
