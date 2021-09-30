const AngleInputs=document.querySelectorAll(".angle-input");
const OutputDisplay=document.querySelector("#output")
const btnCheck=document.querySelector("#btn-check");

btnCheck.addEventListener("click",isTriangle);


function isTriangle(){
    const sumOfTriangles=Number(AngleInputs[0].value)+Number(AngleInputs[1].value) +Number(AngleInputs[2].value) ;
    if(sumOfTriangles===180){
        OutputDisplay.innerText="Yay the angles form a triangle";
    }
    else{
        OutputDisplay.innerText="Oh ho the angles are not gonna form a triangle";
    }
}