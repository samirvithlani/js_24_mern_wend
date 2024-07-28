var imagesArray =["ds","javajee","jee","js","mongo","testing"]

const loadImage= () =>{

    const randomIndex =  Math.floor((Math.random() * imagesArray.length))
    const root = document.getElementById('root');
    const imgTag = document.createElement('img');
    imgTag.src = `./${imagesArray[randomIndex]}.png`;
    imgTag.setAttribute("style","width:100px;height:100px")
    root.appendChild(imgTag);

    //reset the image after 2 seconds
    setTimeout(() => {
        root.removeChild(imgTag);
//        loadImage();
    },2000)

    
}