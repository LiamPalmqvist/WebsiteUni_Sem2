// 2 - Loading the DOM and making sure it's loaded before initialising any functions
window.addEventListener("load", function()
{
    // Setting variables
    let button = document.querySelector("#button1");
    button.addEventListener("click", clickAction);
    
    let button2 = document.querySelector("#btn2");
    button2.addEventListener("click", replacePText);
    
    let button3 = document.querySelector("#btn3");
    button3.addEventListener("click", printPText);
    
    let div6 = document.querySelector("#div6");
    div6.addEventListener("click", clickAction);
    div6.addEventListener("mouseover", enterAction);
    div6.addEventListener("mousemove", mouseHover);
    div6.addEventListener("mousedown", mouseDown);
    div6.addEventListener("mouseup", mouseUp);
    
    let a7 = document.querySelector("#a7");
    a7.addEventListener("click", logURL);
    
    let cells = document.querySelectorAll("td");
    cells.forEach(element => {
        element.addEventListener("click", changeText);
    });
});

let buttonClicked = 0;


// 3 - Logging a click to the console with a variable that says how many times the button was clicked
function clickAction(event) // usually abbreviated to "evt"
{
    buttonClicked++;
    console.log(event, "was clicked", buttonClicked, "time(s)!");
} // This only activates on the "mouse UP" event which means it activates LATER than mousedown
// and can not be activated on something which was not initially clicked on (mousedown, hoverover, mouseup)

// 4 - Replacing the text in a paragraph
function replacePText(evt)
{
    let para = document.querySelector("p#p4");
    console.log(para.innerText);
    para.innerText = "Success!";
}

// 5 - get all elements and log their text to the console
function printPText(evt)
{
    let paras = document.querySelectorAll("p");
    for (let i = 0; i < paras.length; i++) {
        console.log(paras[i].innerText);
    }
}

// 6 - getting different mouse events
function enterAction(event)
{
    console.log("Entered");
}

function mouseHover(event)
{
    console.log("Hover");
}

function mouseDown(event)
{
    console.log("Mouse Down"); // The CLICK part of the click mouseEvent
}

function mouseUp(event)
{
    console.log("Mouse UP"); // The UNCLICK part of the click mouseEvent
}

// 7 - Prevent default event which happens when a link is clicked and output URL
function logURL(event)
{
    event.preventDefault();
    console.log(event.target.href);
}

// 8 - Changing text inside a series of cells when clicked
function changeText(event)
{
    event.target.innerText = "Success!";
}
