
function randomWikipedia(){
	window.open("https://en.wikipedia.org/wiki/Special:Random");
}

$('document').ready(function(){
	$('#random').onClick(randomWikipedia());
});