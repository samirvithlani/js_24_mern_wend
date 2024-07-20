
var users=[{name:'John',age:20},{name:'Jane',age:25},{name:'Jim',age:30}];

const getUserData =()=>{


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(users)
        },2000)
    })

}


const printUsers= async()=>{

    console.log('Before')
    const allUsers = await getUserData() //resolve,reject
    console.log(allUsers)
    console.log('After')


}
printUsers()