
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

			$('#location').animate({opacity: 0},100, function(){
				$('#location').animate({opacity: 1},100);
				$('#location').html(data.city +','+ data.countryCode);
			});
		},
		error: function(){
			alert("Error: Not able to get your location");
		}
	});



	function dataHour(){
		var currentdate = new Date();
		var datetime = " ";

		currentdate.getDate() + "/" + (currentdate.getMonth()+1) + '/' + currentdate.getFullYear();
	}
});
