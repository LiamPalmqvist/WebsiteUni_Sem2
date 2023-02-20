// 2)
console.log(1 == true);
console.log(1 === true);

// 3) a
var x = 3;
var y = 5;

console.log(x <= y);
console.log((x > 4) && (y > 4));
console.log((x > 4) || (y > 4));
console.log(!((x > 4) || (y > 4)));
console.log((x != y) && (y > 0));
console.log((x * y) > 15);
console.log((x * y) >= 15);

// b
if (x > y)
{
    console.log("x is greater than y");
    // c
    console.log(x/y);
} 
else 
{
    console.log("y is greater than x");
}

// d
while (y < 100)
{
    console.log(y);
    y = x + y;
}

// 4
for (let i = 0; i <= 5; i++)
{
    console.log("Hello" + i);
}

// 5
var day = Math.floor(Math.random() * 7);
console.log(day);
switch (day)
{
    case 0: console.log("Monday");
    break;

    case 1: console.log("Tuesday");
    break;

    case 2: console.log("Wednesday");
    break;

    case 3: console.log("Thursday");
    break;

    case 4: console.log("Friday");
    break;

    case 5: console.log("Saturday");
    break;

    case 6: console.log("Sunday");
    break; 

    default: 
    break;
}