/*

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

reverseString("hello") should return a string.

reverseString("hello") should return the string olleh.

reverseString("Howdy") should return the string ydwoH.

reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

*/

function reverseString(str) {
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  console.log(newStr);
  return newStr;
}

reverseString("hello");
