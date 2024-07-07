var users = ["amit","sumit","ajay","vijay","rahul"]


console.log(users)
//users.splice(1,1) //1st index 1 element remove
//users.splice(2,2) //1st index 1 element remove
//users.splice(1,0,"kunal") //1st index 1 element remove
//users.splice(2,0,"kunal","smit") //1st index 1 element remove
var removedelm = users.splice(1,1,"kunal") //1st index 1 element remove
console.log("removing...",removedelm)
console.log(users)
