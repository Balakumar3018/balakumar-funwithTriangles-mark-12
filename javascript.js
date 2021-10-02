const AngleInputs=document.querySelectorAll(".angle-input");
const OutputDisplay=document.querySelector("#output")
const btnCheck=document.querySelector("#btn-check");

btnCheck.addEventListener("click",isTriangle);


function isTriangle(){
    const angle1=Number(AngleInputs[0].value);
    const angle2=Number(AngleInputs[1].value);
    const angle3=Number(AngleInputs[2].value)
    if(angle1 && angle2 && angle3 > 0){
    const sumOfTriangles=angle1+angle2 +angle3 ;
    if(sumOfTriangles===180){
        OutputDisplay.innerText="Yay the angles form a triangle";
    }
    else{
        OutputDisplay.innerText="Oh ho the angles are not gonna form a triangle";
    }
}else{
    OutputDisplay.innerText="Negative number won't form a triangle !    ";
}
}