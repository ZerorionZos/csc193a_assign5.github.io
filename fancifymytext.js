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

    let sentences = text.split(".");

    // Loop through the sentences
    for (let i = 0; i < sentences.length - 1; i++)
    {
        let words = sentences[i].trim().split(" ");

        // Add -MOO 
        words[word.length - 1] = words[words.length - 1] + "-MOO";
        sentences[i] = words.join(" ");
    }
    // Put sentence back together
    text = sentences.join(".");
    textArea.value = text;

}
