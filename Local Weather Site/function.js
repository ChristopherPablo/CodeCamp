
// getting the location from Json api

$(document).ready(function(){

	// getting the coordenates
	$.ajax({
		type: 'GET',
		url: 'http://ip-api.com/json',
		success: coordinates

	});

	function coordinates(data){
		var lon = data.lon;
		var lat = data.lat;
		var city = data.city;
		var country = data.countryCode;
	}

	function dataHour(){
		var currentdate = new Date();
		var datetime = " ";

		currentdate.getDate() + "/" + (currentdate.getMonth()+1) + '/' + currentdate.getFullYear();
	}
});
