
const commerce = (stu)=>{
    console.log('Commerce student');
    console.log(stu);
}
const science = (stu)=>{
    console.log('Science student');
    console.log(stu);
}
const arts = (stu)=>{
    console.log('Arts student');
    console.log(stu);
}


const admission =(cb,stu)=>{

        console.log('Admission started');
        cb(stu)

}


var student = {
    name:"Ram",
    age:20,
    per : 80

}
if(student.per>=80){
    admission(science,student)
}
else if(student.per>=70){
    admission(commerce,student)
}
else if(student.per>=60){
    admission(arts,student)
}
else{
    console.log('No admission');
}
