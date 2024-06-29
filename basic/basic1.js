console.log('basic1.js');

var no1 = 10;
console.log(no1);

var x;
console.log(x);
console.log(typeof x);

{
    var x1 = 20;
    console.log(x1);

    let p = 100;
    console.log(p);
}

console.log(x1);
//console.log(p); // ReferenceError: p is not defined


var x2 =9;
let x3 = 10;

var x2 =90;
//let x3 = 100;

console.log(x2);
console.log(x3);

const x4 = 100;
x4 = 200; // TypeError: Assignment to constant variable.