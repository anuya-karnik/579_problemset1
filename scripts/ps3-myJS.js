// Exercise 1

let mtext = document.getElementById("color-name");
let mbox = document.getElementById("color-block");   

mbox.addEventListener("click", changeColor);

function changeColor() {
     
    if(mbox.getAttribute('id') === 'color-block') {
        mbox.setAttribute('id', 'color-block-change');
        console.log("color changed to green from red");
        mtext.textContent = "#08F080";
    }
    else {
        mbox.setAttribute('id', 'color-block');
        console.log("color changed to red from green");
        mtext.textContent = "#F08080";
    }
}


/*
* For exercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*/

let tempconvert = document.getElementById('convertbtn');
let finput = document.getElementById('f-input');
let cresult = document.getElementById('c-output');

tempconvert.addEventListener('click', convertTemp);

function convertTemp(){
    //Calculate the temperature here
    ftemp = finput.value;
    console.log("The temperature in Fahrenheit is ", ftemp);
    let result = (ftemp - 32) * 5/9;
    console.log("The converted temperature is ", result);

    //Send the calculated temperature to HTML
    cresult.textContent = result.toPrecision(4);

}


