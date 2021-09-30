const inputs=document.querySelectorAll(".hypo-input");
const btnCheck=document.querySelector("#btn-calculate");
const OutputDisplay=document.querySelector("#output")

btnCheck.addEventListener("click",calculateHypotoneuse);
function calculateHypotoneuse(){
    const b=Number(inputs[0].value);
    const h=Number(inputs[1].value);
    const multi=b*h;
    const areaResult=multi/2;
    OutputDisplay.innerText="Area of triangle is "+ areaResult;
}