const addButton=document.getElementById("addButton");
addButton.addEventListener("click", addition);
function addition(){
    const num1= Number(document.getElementById('num1').value);
    const num2= Number(document.getElementById('num2').value);
    document.getElementById("result").textContent = `The result is: ${num1 + num2}`;
}
const subtractButton=document.getElementById("subtractButton");
subtractButton.addEventListener("click", subtraction);
function subtraction(){
    const num1= Number(document.getElementById('num1').value);
    const num2= Number(document.getElementById('num2').value);
    document.getElementById("result").textContent = `The result is: ${num1-num2}`;
}
const divideButton=document.getElementById("divideButton");
divideButton.addEventListener("click", division);
function division(){
    const num1= Number(document.getElementById('num1').value);
    const num2= Number(document.getElementById('num2').value);
    document.getElementById("result").textContent = `The result is: ${num1/num2}`;
}
const multiplyButton=document.getElementById("multiplyButton");
multiplyButton.addEventListener("click", multiplication);
function multiplication(){
    const num1= Number(document.getElementById('num1').value);
    const num2= Number(document.getElementById('num2').value);
    document.getElementById("result").textContent = `The result is: ${num1*num2}`;
}