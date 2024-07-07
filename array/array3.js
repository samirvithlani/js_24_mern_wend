var users = ["amit","sumit","ajay","vijay","rahul"]


// var flag = users.some((u)=>{
//     return u.startsWith("v")
// })
// console.log(flag)


var flag = users.some((u)=>u.startsWith("v"))  
 
// var flag =false;

// for(let i=0;i<users.length;i++){

//     if(users[i].startsWith("v")){
//         flag = true;
//         break;
//     }
// }

// console.log(flag)

// var flag1 =false;

// for(let i=0;i<users.length;i++){
    
//     if(users[i].length<=3){
//         flag1 = false;
//         break
//     }
//     else{
//         flag1 = true;
//     }

// }

// console.log("f1",flag1)


var flag1 = users.every((u)=>u.length>3)
console.log(flag1)