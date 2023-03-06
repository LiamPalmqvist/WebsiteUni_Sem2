// 2
var friends = ["Ben", "Jemima", "Liam", "Mia"];

// a
friends.push("Isabella", "Charlotte");

// b
friends[friends.length-1] = "Miles";
console.log(friends);

// c 
friends.splice(1,2, "Aria");
console.log(friends);

// d
friends.unshift(friends.pop())
console.log(friends);

// e
friends.push(friends.shift());
console.log(friends);

// f
console.log(friends.indexOf("Aria"));

// g
if (friends.indexOf("bob") === -1 ) { console.log(false) } else { console.log(true) };

// h
console.log(friends.sort());

// i
console.log(friends.join(", "));

// 3
count = 0;
for (i in friends)
{
    count += friends[i].length;
}
console.log(count);
