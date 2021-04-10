/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

titleCase("I'm a little tea pot") should return a string.

titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.

titleCase("sHoRt AnD sToUt") should return the string Short And Stout.

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/


function titleCase(str) {
  let splStrArr = str.toLowerCase().split(" ")

  let newStrArr = splStrArr.map(ele => {
    return ele.charAt(0).toUpperCase() + ele.slice(1)
  })
 
  return newStrArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"))
console.log(titleCase("sHoRt AnD sToUt"))
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
