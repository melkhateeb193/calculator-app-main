document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggle-button1').classList.add('tri-state-toggle-button-active');

    let buttons = document.querySelectorAll('.tri-state-toggle-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(otherButton) {
                otherButton.classList.remove('tri-state-toggle-button-active');
            });
            button.className += ' tri-state-toggle-button-active';
        });
    });
});

const btn1 = document.getElementById('toggle-button1');
const btn2 = document.getElementById('toggle-button2');
const btn3 = document.getElementById('toggle-button3');
const display = document.getElementById('inputOut')
btn1.addEventListener('click', ()=>{
    document.body.style.backgroundColor="hsl(222, 26%, 31%)";
    document.body.style.color="white";
    document.getElementById('triContainer').style.backgroundColor="hsl(223, 31%, 20%)";
    document.getElementById('inputOut').style.backgroundColor="hsl(223, 31%, 20%)";
    document.getElementById('inputOut').style.color="white";
    document.getElementById('keys-Container').style.backgroundColor="hsl(223, 31%, 20%)";
    let buttons = document.querySelectorAll('.buttons');
    buttons.forEach((btn)=> btn.style.backgroundColor="hsl(30, 25%, 89%)")
    buttons.forEach((btn)=> btn.style.color="black")
    buttons.forEach((btn)=> btn.style.boxShadow ="0px 4px 0px hsl(28, 16%, 65%)")
    document.getElementById('equalBtn').style.backgroundColor="hsl(6, 63%, 50%)";
    document.getElementById('equalBtn').style.boxShadow="0px 4px 0px hsl(6, 70%, 34%)";
    document.getElementById('buttonColor').style.backgroundColor="hsl(225, 21%, 49%)";
    document.getElementById('buttonColor').style.boxShadow="0px 4px 0px hsl(224, 28%, 35%)";
    
    document.getElementById('buttonColor-1').style.backgroundColor="hsl(225, 21%, 49%)";
    document.getElementById('buttonColor-1').style.boxShadow="0px 4px 0px hsl(224, 28%, 35%)";
    

})

btn2.addEventListener('click', ()=>{
    document.body.style.backgroundColor="hsl(0, 0%, 90%)";
    document.body.style.color="black";
    document.getElementById('triContainer').style.backgroundColor="hsl(0, 5%, 81%)";
    document.getElementById('inputOut').style.backgroundColor="hsl(0, 5%, 81%)";
    document.getElementById('keys-Container').style.backgroundColor="hsl(0, 5%, 81%)";
    document.getElementById('equalBtn').style.backgroundColor="hsl(25, 98%, 40%)";
    document.getElementById('inputOut').style.color="black";

    let buttons = document.querySelectorAll('.buttons');
    buttons.forEach((btn)=> btn.style.backgroundColor=" hsl(45, 7%, 89%)")
    buttons.forEach((btn)=> btn.style.color="black")
    buttons.forEach((btn)=> btn.style.boxShadow ="0px 4px 0px hsl(35, 11%, 61%)")
    document.getElementById('equalBtn').style.boxShadow=" 0px 4px 0px hsl(35, 11%, 61%)";
    document.getElementById('buttonColor').style.backgroundColor=" hsl(185, 42%, 37%)";
    document.getElementById('buttonColor').style.boxShadow="0px 4px 0px hsl(185, 58%, 25%)";
    document.getElementById('buttonColor-1').style.backgroundColor=" hsl(185, 42%, 37%)";
    document.getElementById('buttonColor-1').style.boxShadow="0px 4px 0px hsl(185, 58%, 25%)";
})

btn3.addEventListener('click', ()=>{
    document.body.style.backgroundColor=" hsl(268, 75%, 9%)";
    document.body.style.color="hsl(52, 100%, 62%)";
    document.getElementById('triContainer').style.backgroundColor="hsl(268, 71%, 12%)";
    document.getElementById('inputOut').style.backgroundColor="hsl(268, 71%, 12%)";
    document.getElementById('inputOut').style.color="hsl(52, 100%, 62%)";
    document.getElementById('keys-Container').style.backgroundColor="hsl(268, 71%, 12%)";
     let buttons = document.querySelectorAll('.buttons');
     buttons.forEach((btn)=> btn.style.backgroundColor="hsl(281, 89%, 26%)")
     buttons.forEach((btn)=> btn.style.color="hsl(52, 100%, 62%)")
     buttons.forEach((btn)=> btn.style.boxShadow ="0px 4px 0px hsl(290, 70%, 36%)")
     document.getElementById('equalBtn').style.backgroundColor="hsl(176, 100%, 44%)";
     document.getElementById('equalBtn').style.boxShadow="0px 4px 0px hsl(177, 92%, 70%)";
     document.getElementById('buttonColor').style.backgroundColor="  hsl(281, 89%, 26%)";
     document.getElementById('buttonColor').style.boxShadow="0px 4px 0px hsl(285, 91%, 52%)";
     document.getElementById('buttonColor-1').style.backgroundColor="  hsl(281, 89%, 26%)";
     document.getElementById('buttonColor-1').style.boxShadow="0px 4px 0px hsl(285, 91%, 52%)";
})

function appendToDisplay(input) {
display.value += input
}

function clearDisplay(){
    display.value= ""  
}

function calculate() {
try{
    display.value =eval(display.value)
}catch(e)
{
    display.value = "error";

}
}

function deleteLastCharacter() {
    let currentExpression = display.value;
    display.value = currentExpression.slice(0, -1);
  }