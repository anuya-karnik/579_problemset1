// Exercise 1

let mtext = document.getElementById("color-name");
let mbox = document.getElementById("color-block");   

mbox.addEventListener("click", changeColor);

function changeColor() {
     
    if(mbox.getAttribute('id') === 'color-block') {
        mbox.setAttribute('id', 'color-block-change');
        console.log("color changed to green from red");
        mtext.textContent = "#08F080";
        // mbox = document.getElementById("color-block-change");        
    }
    else {
        mbox.setAttribute('id', 'color-block');
        console.log("color changed to red from green");
        mtext.textContent = "#F08080";
        // mbox = document.getElementById('color-block');
    }
}


/*
* For exercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*/

function convertTemp(){
    //Calculate the temperature here

    //Send the calculated temperature to HTML

}


