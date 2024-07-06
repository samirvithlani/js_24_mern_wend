const goa = (name)=>{

    return name + "welcome to goa"
}
const mumbai = (name)=>{
    return name + "welcome to mumbai"
}
const delhi = (name)=>{
    return name + "welcome to delhi"
}

const flight = (cb,name)=>{


    console.log('Flight started');
    var pdetail = cb(name)
    console.log(pdetail)


}

const flight1 = (cb,name)=>{


    return cb(name)
}

flight(goa,"Ram")
var pdetail = flight1(mumbai,"Shyam")
console.log(pdetail)