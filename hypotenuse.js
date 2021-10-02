const inputs=document.querySelectorAll(".hypo-input");
const btnCheck=document.querySelector("#btn-check");
const OutputDisplay=document.querySelector("#output")

btnCheck.addEventListener("click",calculateHypotoneuse);
function calculateHypotoneuse(){
    const a=Number(inputs[0].value);
    const b=Number(inputs[1].value);
    if(a && b > 0 ){
    const sum=calculateSum(a,b);
    const hypoResult=Math.sqrt(sum);
    OutputDisplay.innerText=hypoResult;
}else{
    OutputDisplay.innerText="please enter positve inputs";
}
}
function calculateSum(a,b){
    return a*a + b*b;
}