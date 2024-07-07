var users = ["amit","sumit","ajay","vijaya","rahul"]






const sortByLen = (a,b)=>{
    return a.length-b.length
}

//users = users.sort()
users = users.sort(sortByLen)
console.log(users)


function compareNumber(a,b){
    return a-b
}

var sal = [100,23,19,234,56,789,2,90,890,9,76]
//a =100 , b=23 23
//a = 100 , b=19 19
//a = 100 , b=234 100
//a = 234 , b=56 56
//sal = sal.sort()
sal = sal.sort(compareNumber)
console.log(sal)


sal = sal.sort((a,b)=>a-b)
console.log(sal)

var users1 = ["amit","sumit","ajay","vijaya","rahul"]

users1 = users1.reverse()
console.log(users1)

//some
//every
//sort
//reverse
//splice