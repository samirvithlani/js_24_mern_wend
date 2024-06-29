//wa wr
//woa woar

function test() {
  console.log("This is test function");
}

function sum(a, b) {
  console.log(a);
  console.log(b);
  //Nan = Not a Number
}
test();
//sum(10,20)
sum(10);

function mul(a, b) {
  return a * b;
}
var ans = mul(10, 20);
console.log(ans);
console.log(mul(10, 200));

//var const

const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(10, 20, 30));

const sub = (a, b) => a - b;
console.log(sub(10, 20));
