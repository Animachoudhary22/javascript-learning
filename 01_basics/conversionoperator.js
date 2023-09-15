let score = "33"
let score1 = "33abc"
console.log(typeof score);
console.log(typeof(score));

//convert string into number
let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber1);

// "33"=>33
//"33abc" => NaN
//true =>1;false=>0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn);

console.log(booleanisLoggedIn);
// 1 =>true;0=>false
//" "=>false
//"anima"=>true
let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));
// ************operations********************************
let value = 3
let Negvalue  = -value
// console.log(Negvalue);
// console.log(2*2);
// console.log(2**3)
let str1 = "hello"
let str2 = " Anima"
let str3 = str1 + str2
// console.log(str3);
// console.log(2 +"2");
// console.log(2+2 + "3");
// console.log("2" + 2 + 3);
// console.log("hello" + " "+ "aaanima");
let gameCounter = 100
gameCounter++;
console.log(gameCounter);