/*
Basic Algorithm Scripting
Repeat a String Repeat a StringPassed

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
repeatStringNumTimes("*", 3) should return the string ***.

repeatStringNumTimes("abc", 3) should return the string abcabcabc.

repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.

repeatStringNumTimes("abc", 1) should return the string abc.

repeatStringNumTimes("*", 8) should return the string ********.

repeatStringNumTimes("abc", -2) should return an empty string ("").

The built-in repeat() method should not be used.

repeatStringNumTimes("abc", 0) should return "".

*/

function repeatStringNumTimes(str, num) {
  let newStr = "";
  let i;

  if (num < 1) return "";

  for (i = 0; i < num;i++) {
    newStr += str
  }

  return newStr;
}

repeatStringNumTimes("abc", 3);
