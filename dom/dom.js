const main = document.getElementById('main');
const h1tag = document.createElement('h1');
h1tag.setAttribute("id","p1")
h1tag.setAttribute("style","color:blue")
h1tag.innerHTML = 'Hello World';
main.appendChild(h1tag);

//name len > 4 greeen or else red..
var users = ["ram","shyam","hari","sita","gita"];
const loadData = () => {
    const main2 = document.getElementById('main2');
    const ul = document.createElement('ul');
    for(let i=0;i<users.length;i++){
        const li = document.createElement('li');
        li.innerHTML = users[i];
        ul.appendChild(li);
    }

    main2.appendChild(ul);

}