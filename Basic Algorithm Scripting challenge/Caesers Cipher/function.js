function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  for ( var i = 0; i < str.length; i++ ) {
      char = str.charCodeAt(i);
      if ( char < 65 || char > 90 ) {
          char = char;
      }
      else {
        char += 13;
        if ( char > 90 ) {
          char = ( char - 90 ) + 64;
        }
      }
    newStr += String.fromCharCode(char);
  }
  return newStr;
}