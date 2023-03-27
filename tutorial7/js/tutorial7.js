window.addEventListener("load", function() {

    console.log("Document loaded - ready to go...");

    // write your tutorial code here
    
    // 2 - Getting things from the DOM using selectors
    let target = this.document.querySelector("#elem1");
    console.log(target);

    target = this.document.getElementById("elem1");
    console.log(target);
    

    // 3 - Practicing selector skills

    // Grabbing an element by its tag (<p>)
    /* OUTDATED
    let paragraph = this.document.getElementsByTagName("p");
    */
    let paragraph = this.document.querySelectorAll("p");
    console.log("A - ", paragraph, "Items: " + paragraph.length);


    // Grabbing an element by its class (.highlight)
    /* OUTDATED
    let highlights = this.document.getElementsByClassName("highlight");
    */
    let highlights = this.document.querySelectorAll(".highlight");
    console.log("B - ", highlights, "Items: " + highlights.length);

    // Grabbing an element by its ID (#first)
    /* OUTDATED
    let firstLists = this.document.getElementById("first");
    let itemsInLists = firstLists.getElementsByTagName("li");
    */
    // This gets the elements in the DOM which are <li> that are children of <ol>#first
    let itemsInLists = this.document.querySelectorAll("ol#first li");
    console.log("C - ", itemsInLists, "Items: " + itemsInLists.length);


    // Extracting elements of <li> with class name .highlights
    /* OUTDATED
    let highlightsList = this.document.getElementsByTagName("li");
    let itemsWithTagHighlight = [];
    for (const i in highlightsList) if (highlightsList[i].className === "highlight")
     itemsWithTagHighlight.push(highlightsList[i]);
    */
    let highlightsList = this.document.querySelectorAll("li.highlight")
    console.log("D - ", highlightsList, "Items: ", highlightsList.length);


    // Extracting <li> and <p> with class name .highlight
    /* OUTDATED
    // Getting initial elements
    let lists = this.document.getElementsByTagName("li");
    let paras = this.document.getElementsByTagName("p");
    let listHighlights = [];
    let paraHighlights = [];

    // Separating based on class name
    for (const i in lists) if (lists[i].className === "highlight")
        listHighlights.push(lists[i]);
    for (const i in paras) if (paras[i].className === "highlight")
        paraHighlights.push(paras[i]);

    // Combining arrays
    let paraListHighlights = [listHighlights, paraHighlights]
    // ----
    */
    let paraLists = this.document.querySelectorAll("p.highlight, li.highlight");
    console.log("E - ", paraLists, "Items: ", paraLists.length);


    // 4 - What are the advantages of using querySelector over other older methods?

    /*
    The querySelector() method is more flexible than older methods like getElementsByTagName() because it can use any
    CSS3 selector, not just simple ones for tag names. This gives it much more power and versatility when selecting
    elements.

    Another difference between querySelector() and getElementsByTagName() is that querySelector() returns a static
    NodeList while getElementsByTagName() returns a live NodeList. A live NodeList is automatically updated when the
    DOM changes, while a static NodeList is not.

    In terms of performance, querySelector() calls run in O(n) time and getElementsByTagName() calls run in O(1) time,
    where n is the total number of all children of the element or document it is invoked on1. However, the performance
    difference may not be significant for most use cases.
    */


    // 5 - more querySelector
    console.log("There are", this.document.querySelector("ul")
        .querySelectorAll(".highlight").length,
        "elements inside element <ul> with tag .highlight");

    // 6 - children and siblings
    console.log(
        "#first's",
        "\nFirst child:", this.document.querySelector("#first").firstChild,
        "\nNext sibling:", this.document.querySelector("#first").nextSibling,
        "\nParent:", this.document.querySelector("#first").parentElement,
        "\nNode Type:", this.document.querySelector("#first").nodeType,
        "\nNode Name:", this.document.querySelector("#first").nodeName
    )
});