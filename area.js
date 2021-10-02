const inputs=document.querySelectorAll(".hypo-input");
const btnCheck=document.querySelector("#btn-calculate");
const OutputDisplay=document.querySelector("#output")

btnCheck.addEventListener("click",calculateAreaTriangle);
function calculateAreaTriangle(){
    const b=Number(inputs[0].value);
    const h=Number(inputs[1].value);
    if(b >0 && h >0){
    const multi=b*h;
    const areaResult=multi/2;
    OutputDisplay.innerText="Area of triangle is "+ areaResult;
}else{
    OutputDisplay.innerText="Please enter positive inputs";
}
}