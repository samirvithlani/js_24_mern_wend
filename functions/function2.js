// const compare = (a,b)=> {
//     if(a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }

const compare = (a, b) => a>b ? a : b;
console.log(compare(10,20));


const compare1 = (a,b,c)=> a + b + c > 100 ? "true" : "false"
console.log(compare1(10,20,30));
