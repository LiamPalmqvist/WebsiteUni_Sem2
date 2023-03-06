// 2
let sentence = "I'm learning JavaScript in my web development module";

// 3
console.log("There are " + sentence.length + " characters in the sentence '" + sentence + "'");

// 4
// Shows the position of the word in a string
console.log("The position of the word JavaScript in the sentence '" + sentence + "' is " + sentence.indexOf("JavaScript") + ".");

// 5
let num = 0;
for (char in sentence)
{
    if (sentence.charAt(char) === "e")
    {
        num++;
    }
}
console.log("The letter 'e' appears " + num + " times in the sentence");

// 6
const indexes = [];
for (i in sentence)
{
    if (sentence[i] === "m")
    {
        indexes.push(i);
    }
}
console.log(indexes);
// revision of previous iteration

reverse = "";
for (let index = sentence.length-1; index > -1; index--)
{
    reverse += sentence[index];
}
console.log(reverse);

// 8
let url = window.location.href;
if (url.startsWith("https:"))
{
    console.log("Webpage is secure");
}
else if (url.startsWith("file:"))
{
    console.log("Webpage is a file!")
}
else
{
console.log("Webpage is not secure!");
}