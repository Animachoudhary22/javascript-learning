// const marvel_heroes = ["thor","marvel","ironman"];
// const dc_heroes  = ["angel","shakstiman","flash"];
// console.log(marvel_heroes);
// const newMarvel = marvel_heroes.concat(dc_heroes);
// console.log(newMarvel);
// const all_hero = [...dc_heroes,...marvel_heroes]
// console.log(all_hero);
const another_array = [1,2,3,[4,5],[6,[7,8]]]
console.log(another_array.flat(Infinity));//ye saare array ko ek mein hi kardega
console.log(Array.from("Anima"));//array bnadega
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
