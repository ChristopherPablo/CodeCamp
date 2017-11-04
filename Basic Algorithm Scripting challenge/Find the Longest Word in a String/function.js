	function findLongestWord(str) {

  var newArray = str.split(" ");
  var count = 0;

  for(var i = 0; i < newArray.length; i++){
    if(newArray[i].length > count){
       count = newArray[i].length;
    }

  }

  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");