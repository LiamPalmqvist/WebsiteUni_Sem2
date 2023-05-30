window.addEventListener("load", function() {
    celcius = document.querySelector("label#celcius");
    inputButton = document.querySelector("#submit");
    inputButton.addEventListener("click", getFormData)

    form3 = document.querySelector("#form3");
    form3.addEventListener("submit", preventDefaultCheckEmail);
    div4 = document.querySelector("#div4");

    form4 = document.querySelector("#form4");
    form4.addEventListener("submit", addElement);
    btn4Remove = document.querySelector("#btn4remove");
    btn4Remove.addEventListener("mouseup", removeElements);
    unorderedList = document.querySelector("#unorderedList");

    form5 = document.querySelector("#form5");
    form5.addEventListener("submit", getElements);
});

// 2 - Getting form data and replacing
function getFormData(event)
{
    var formData = document.forms['convert'].elements["fahrenheit"].value;
    console.log(formData);
    celcius.innerHTML = (formData-32)*(5/9);
}

// 3 - prevent form from submitting defaults
// THIS IS A BETTER EAMPLE THAN Q2
function preventDefaultCheckEmail(event)
{
    event.preventDefault(); // Prevents the submission of the form
    data = document.forms['form3'].elements["input3"].value;
    if (data.endsWith("@brighton.ac.uk") || data.endsWith("@uni.brighton.ac.uk"))
    {
        console.log("GOOD");
        div4.innerHTML = "";
        div4.style.background = "none";
    } 
    else
    {
        console.log("BAD");
        div4.innerHTML = "EMAIL MUST END WITH '@brighton.ac.uk' OR '@uni.brighton.ac.uk'";
        div4.style.background = "red";
    }

    return false; // MUST RETURN DEFAULT TO INTERCEPT SUBMIT ACTION
}

// 4 - Adding and removing elements from lists using forms
function addElement(event)
{
    event.preventDefault(); // Prevents the submission of the form
    
    console.log("TRUE");
    li = unorderedList.appendChild(
        document.createElement("li")
    );
    li.innerHTML = document.forms['form4'].elements["input4"].value;

    return false; // MUST RETURN DEFAULT TO INTERCEPT SUBMIT ACTION
}

function removeElements(event)
{
    event.preventDefault(); // Prevents the submission of the form
    
    console.log("FALSE");
    unorderedList.innerHTML = "";

    return false; // MUST RETURN DEFAULT TO INTERCEPT SUBMIT ACTION
}

// 5 - get form choices and print to console
// THIS IS MUCH BETTER THAN Q3
function getElements(event)
{
    event.preventDefault();

    selection1 = "";

    document.querySelectorAll(".checkBox:checked").forEach(element => {
        selection1 += element.value + " ";
    });
    selection2 = document.forms['form5'].elements['animalRadio'].value;
    selection3 = document.forms['form5'].elements['foodSelect'].value;
    selection4 = document.forms['form5'].elements['textEntry'].value;

    console.log(selection1);
    console.log(selection2);
    console.log(selection3);
    console.log(selection4);

    return false;
}