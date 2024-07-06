
const jpgHandler =()=>{
    console.log('jpg handler');
}

const pngHandler =()=>{
    console.log('png handler');
}

const pdfHandler =()=>{
    console.log('pdf handler');
}


function uploadFile(cb){

    // console.log(cb)
    cb()

}

var fileName = "abc.jpg"
if(fileName.endsWith('.jpg')){
    uploadFile(jpgHandler)
}
else if(fileName.endsWith('.png')){
    uploadFile(pngHandler)
}
else if(fileName.endsWith('.pdf')){
    uploadFile(pdfHandler)
}