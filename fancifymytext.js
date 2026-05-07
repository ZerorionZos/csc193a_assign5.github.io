// Ryan So | CSC 193A-01 | Assignment 5 

// V Debug to make sure the js file was linked V
// alert("Hello, world!");

function makeBigger() 
{
    alert("Hello, world! (Ryan did this)");  

    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

function makeFancy() 
{
    // alert("Ok you selected Fancy. Good job kid.");

    let textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function makeBoring() 
{
    // alert("Ok you selected Boring. Good job kid.");

    let textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function mooText() {

    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();

    textArea.value = text;

    // Splits up the text into sentences
    // Yeah, I got no idea how to do this sorry
}