// 2
function multiply(a, b)
{
    return a * b;
}

console.log(multiply(354, 875));
console.log(multiply(9876.543, 765.123));

console.log(multiply(2, 3, 5));
// This literally just disregards the third parameter and spits out 6

// 3
function countChar(string, char)
{
    number = 0;
    for (i in string)
    {
        if (string.toLowerCase().charAt(i) === char)
        {
            number++;
        }
    }
    return number;
}

console.log(countChar("Hello, my name is Liam", "l"));

// 4
function countStr(sentence, searchTerm)
{
    num = 0;
    i = 0;
    while (sentence.indexOf(searchTerm, i) !== -1)
    {
        i = sentence.indexOf(searchTerm, i) + 1;
        num++;
    }
    return ("The string " + searchTerm + " appears " + num + " time(s) in the string '" + sentence + "'.");
}

console.log(countStr("Haystack", "needle"));
console.log(countStr('I scream, you scream, we all scream for icecream!', "cream"));
console.log(countStr("She sells sea shells on the sea shore. The shells that she sells are sea shells I'm sure. So if she sells sea shells on the sea shore, I'm sure that the shells are sea shore shells", "sea"));

// 5
function rotate(array, timesRotated)
{
    while (timesRotated > 0)
    {
        temp = array.pop();
        array.unshift(temp);
        
        timesRotated --;
    }
    return array;
}

new_array = ["Harry","Sarah","Oscar","Tina"];
console.log(new_array);
console.log(rotate(new_array, 2));

// 6
num_array = [12, 9, 33, 8, 71, 2, 41, 5];
console.log(num_array.sort());
console.log(num_array.sort((a,b)=>a-b))
console.log(num_array.sort((a,b)=>b-a))


// My own research
// anonymous functions
console.log( function(x, y) {return x*y;} )
// This returns the product of x and y without having to
// call a named function to do this once.

// Essentially, we do this for functions in which we only need to use
// once.

// We can also overload the function without any errors occuring
console.log(multiply());
console.log(multiply(1, 2, 3));
// The first one returns the Not a Number variable (NaN)
// The last one returns the product of the first two parameters
console.log(multiply(a = 1, 2, b = 4))
// And this one returns the product of a and b as they are named
// variabled


function multiplyx(a = 0, b = 1)
{
    return a*b;
}
// By default this will return 0 because the variables have default
// states, as defined in the function
console.log(multiplyx());
