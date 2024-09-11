/*
********* -String- ********
  "vinay"
  'vinay'

  */

//   *******************************************

const name = "vinay"
const repoCount = 50

// console.log (name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("hitechGame-vs-singh")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-7,4)
console.log(anotherString);

// *******************- Trim- ************

const newStringOne = " vinay "
console.log(newStringOne);
console.log(newStringOne.trim())

// *********************-Replace-************

const url = "https://vinay.com/vinay%$singh";
console.log(url.replace('%$', ' -'));
console.log(url.includes('vinay'));

// ******************************************************

console.log(gameName.split('-'));
