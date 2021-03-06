
// getting the location from Json api

$(document).ready(function(){
	var celsiusTemp;
	var minTemp;
	var maxTemp;

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

				celsiusTemp = Math.round((result.main.temp * 10)/10);
				minTemp =  Math.round((result.main.temp_min * 10)/10);
				maxTemp = Math.round((result.main.temp_max * 10)/10);

				$('#location').html(result.name + ',' + result.sys.country);
				$('#weather').text(result.weather[0].main);
				$('#temp').html(celsiusTemp + "°");
				$('.unit').text('C');
				$('#wind').html('Wind: '+result.wind.speed);
				$('#humidity').html('Humidity: ' + result.main.humidity);
				$('#temp_min').html('Temp min: ' + minTemp + '°');
				$('#temp_max').html('Temp max: ' + maxTemp + '°');
				dataHour();
				animationTemp(result.weather[0].main);
				$('.preLoading').toggle('slow');// Transition to make the loading page hide

			},
			error: function(){
				alert("not able the get the weather");
			}
		});
	}

//Changing and choosing the animation
	function animationTemp(weather){
		console.log(weather);
		var weather = weather.toLowerCase();
		switch(weather){
			case 'clouds':
				showTemp('.cloudy', '#7A8076', 'kawaiiCloud')
				break;
			case 'rain':
				showTemp('.rainy', '#E6E6E6' , 'kawaiiRain')
				break;
			case 'snow':
				showTemp('.flurries', '#EBEBEB', 'kawaiiSnow')
				break;
			case 'clear':
				showTemp('.sunny', '#fff', 'kawaiiSun')
				break;
			case 'thumderstorm':
				showTemp('.thunder-storm', '#E6E6E4', 'kawaiiStorm')
				break;
			default:
				showTemp('.cloudy', '#7A8076', 'kawaiiCloud');
		}
	}

	function showTemp(weather, background , classKawaii){
		$(weather).removeClass('hide');
		$('#kawaii').addClass(classKawaii);
		$('.container').css('background-color', background);
	}

//Changing the temperature unit
	$('#unit').click(function(){
		var currentUnit = $('#unit').text();

		if (currentUnit == 'C') {
			$('#temp').text((Math.round(celsiusTemp * 9 / 5 + 32)) + '°');
			$('#temp_min').text('Temp min: ' + (Math.round(minTemp * 9 / 5 + 32)) + '°');
			$('#temp_max').text('Temp max: ' + (Math.round(maxTemp * 9 / 5 + 32)) + '°');
			$('.unit').text('F');
		}
		else{
			$('#temp').text(celsiusTemp + '°');
			$('#temp_min').html('Temp min: ' + minTemp + '°' );
			$('#temp_max').html('Temp max: ' + maxTemp + '°' );
			$('.unit').text('C');
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

		$('#hours').html(hour+ ':' + minuts + ':' + seconds + ' '+ meridium);
	};

setInterval(clock, 1000); // updating the clock every second
getLocation();

});
