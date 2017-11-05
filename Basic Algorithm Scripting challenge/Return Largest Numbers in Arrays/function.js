function largestOfFour(arr) {
  // You can do this!
  var arrResulte = [];
  var aux;

  for(var i=0; i< arr.length; i++){
    aux =0;
    for(var j=0; j<arr[i].length; j++){
      if(arr[i][j] > aux){
        aux = arr[i][j];
      }
    }
    arrResulte.push(aux);
  }
  return arrResulte;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);