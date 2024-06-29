// var uName = "amit"
// var uAge = 30
// var uCity = "Delhi"
// var uEmail = "amit@gmail.com"

// console.log(uName)
// console.log(uAge)
// console.log(uCity)
// console.log(uEmail)


var user = {
    uname : "amit",
    uage : 30,
    uemail : "amit@gmail.com",

    address:{
        ucity : "Delhi",
        ustate : "Delhi",
        pincode : 110001,
    }
    
}

console.log(user)
console.log(user.uname)
console.log(user.uage)
console.log(user.uemail)
console.log(user.address.ucity)


var products = {
    name: "Mobile",
    price: 10000,
    colors: ["red", "green", "blue"],
    details:{
        brand: "Samsung",
        model: "Galaxy M30",
        ram: "4GB",
        rom: "64GB"
    }


}

console.log(products)
for(let i=0;i<products.colors.length;i++){

    console.log(products.colors[i])
}



