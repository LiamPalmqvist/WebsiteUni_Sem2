swapped = false;

window.addEventListener("load", function() {

    console.log("Loaded!");

    let para = document.querySelector("p");
    para.addEventListener("click", paraClick);


    let image = document.querySelector("img");
    image.addEventListener("click", imgClick);

    let div4 = document.querySelector("#div4");
    let button4 = document.querySelector("#btn4");
    button4.addEventListener("click", addList);
    button4.addEventListener("click", addTable);

    let button6 = document.querySelector("#btn6");
    let button7 = document.querySelector("#btn7");
    let div6 = document.querySelector('#div6');
    button6.addEventListener("click", addParas);
    button7.addEventListener("click", removeParas);
})

// 2 - Swapping an element's title with its innerText
function paraClick(event)
{
    console.log("Clicked!");

    let text = event.target.innerText;

    event.target.innerText = event.target.title;
    event.target.title = text;
}

// 3 - Swapping an image with another on click
function imgClick(event)
{
    console.log("Image has been clicked!");
    
    switch (swapped)
    {
        case true:
            event.target.src = "../../images/appleMusic300x300.png";
            swapped = false;
            break;
        case false:
            event.target.src = "../../images/spotify300x300.png";
            swapped = true;
            break
    } 
    
    console.log(swapped);
}

// 4 - create list from button click
var list_content = ["Apple", "Banana", "Orange", "Mango", "Papaya"];
function addList(event)
{
    // Creates the div and the variable
    newdiv = div4.appendChild(
        document.createElement("ul")
    );

    // Creates child LI elements inside the UL
    list_content.forEach(element => {
        item = newdiv.appendChild(
            document.createElement("li")
        );
        item.innerHTML = element;
    });
    // should be done differently, this causes more memory to be used
}

// 5 - create a table in JS entirely and add elements from an array
function addTable(event)
{
    var table_content = [
        ["Tom", 20, "BSc (Hons) Computer Science"],
        ["Mary", 19, "BSc (Hons) Computer Science (Games)"],
        ["Jerry", 21, "BSc (Hons) Digital Games Production"],
        ["Jane", 19, "BSc (Hons) Digital Media"],
        ["Olivia", 22, "BSc (Hons) Digital Media Development"],
        ["Jack", 20, "BSc (Hons) Software Engineering"]
    ];
    
    // Create the new table inside the div4
    newTable = div4.appendChild(
        document.createElement("table")
    );

    table_content.forEach(element => // Taking the first level
    {
        row = newTable.insertRow();
        element.forEach(innerElement => // Taking the second level
        {
            cell = row.insertCell();
            cell.innerText = innerElement;
        });
    });
}

// 6 - Add paragraphs using js which count upwards
function addParas(event)
{
    for (let i = 0; i < 10; i++) {
        p = div6.appendChild(
            document.createElement("p")
        );
        p.innerHTML = "This is paragraph number " + i;
    }
}

// 7 - remove all paragraphs from given html element
function removeParas(event)
{
    elements = div6.querySelectorAll("p");
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    })
}