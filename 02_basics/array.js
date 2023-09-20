const myarr = [1,2,3,5];
// console.log(myarr[0]);
 //const myarr1 = new Array(1,2,3);
// console.log(myarr1[1]);
// myarr.push(6);
// myarr.push(7);
// console.log(myarr);
// myarr.pop();
myarr.unshift(0)
// console.log(myarr);
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));
const newArr =  myarr.join();//convert inton string
// console.log(typeof(newArr));
// console.log(typeof(myarr));
const n1 = myarr.slice(1,3);
console.log("A",myarr);
console.log(n1);
const n2 = myarr.splice(1,3);
console.log("B",myarr);
console.log(n2);

