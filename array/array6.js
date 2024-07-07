var users = ["amit","sumit","ajay","vijaya","amit","rahul"]


console.log(users.includes("amit")) //true
console.log(users.indexOf("amit")) //0
console.log(users.indexOf("amit",1)) //-1

var ind1 = users.indexOf("amit")
var ind2 = users.indexOf("amit",ind1+1)
console.log(ind2)

console.log(users.lastIndexOf("amit",2))

