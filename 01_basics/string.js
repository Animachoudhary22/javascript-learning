const name = "Anima"
const repoCount = 50
// console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName  = new String('anima-ch');//object
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString  = gameName.substring(0,4);
console.log(newString);
const anotherString = "   Anima"
console.log(anotherString);
console.log(anotherString.trim());
const url = "https://js%20url";
console.log(url.replace('%20','-'));
console.log(gameName.split('-'));