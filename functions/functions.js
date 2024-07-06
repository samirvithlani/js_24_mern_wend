
function toBeCalled(){

    console.log("I am called")
}
function add(x){

    //console.log(x) x+...
    x()

}
// add(10)
// add("ram")
// add(true)
// add([1,2,3])
// add({name:"ram"})
add(toBeCalled)