
const generateExam =()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:'Exam generated successfully',
                name:'Maths',
                marks:100,
            })
        },2000)
    })
}


const generateQuestions = (exam)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
        resolve({
            message:'Questions generated successfully',
            questions:[1,2,3,4,5],
            exam:exam
        })
    },2000)

    })

}
const startExam = (questions)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:'Exam started successfully',
                questions:questions.questions,
                exam:questions.exam
            })
        },2000)
    })
}


generateExam().then((exam)=>{
    console.log(exam)
    generateQuestions(exam).then((questions)=>{
        console.log(questions)

        startExam(questions).then((result)=>{
            console.log(result)
        })

    })
})

//callback hell



