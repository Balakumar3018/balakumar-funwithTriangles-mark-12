const quizForm=document.querySelector(".form-quiz");
const btnCheck=document.querySelector("#btn-check");
const OutputDisplay=document.querySelector("#output");
const correctAnswers=["90°","right angled","one right angle","Equilateral triangle","no"]

btnCheck.addEventListener("click",function calculateScore(){
    let score=0;
    let index=0;
    
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value==correctAnswers[index]){
            score=score+1;
        }
        index=index+1;
    }
    OutputDisplay.innerText="Your score is "+score ;
});