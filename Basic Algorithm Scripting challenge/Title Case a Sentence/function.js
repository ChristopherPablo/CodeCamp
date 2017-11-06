	function titleCase(str) {

  var newArray = str.split(" ");

  for(var i=0; i<newArray.length; i++){
    var aux = newArray[i].toLowerCase().split("");
    aux[0] = aux[0].toUpperCase();
    newArray[i] = aux.join("");
  }
  return newArray.join(" ");
}

titleCase("I'm a little tea pot");