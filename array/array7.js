var users = ["amit","sumit","ajay","vijaya","rahul"]

//void
// users.forEach((u,i)=>{
//     console.log(i,"-->",u)
// })

//map will return new array with same length
// var users1 = users.map((u,i)=>{
//     //console.log(i,"-->",u)
//     //return u.startsWith("a")
//     return u.toUpperCase()
// })

//predicate..
//filter will return new array with some elements
var users1 = users.filter((u)=>{

    //return u.startsWith("a")
    return u.length>4

})
console.log(users1)