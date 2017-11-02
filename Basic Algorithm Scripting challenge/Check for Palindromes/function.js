function palindrome(str) {
  // Good luck!
  var newStr = str.replace(/[&\/\\#,+()$~%.'":*?<>{}_-]/g, "").replace(/ /g, "");
  newStr = newStr.toLowerCase();

  var inverseStr = newStr.split("").reverse().join("");

  if(newStr === inverseStr){
    return true;
  }
  else{
    return false;
  }
}