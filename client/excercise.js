// Instructions:
var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.floor( Math.random() * 14 ) ];
console.log("HUSH HUSH this is your random number: " + random_value);
// Write a for loop that looks at each index of the array to see if it matches the random value
// If it does match the random value display an alert box with the index of the array and the value

for(let x = 0; x< stuff.length; x++){
    if (stuff[x] === random_value){
        console.log("Long Ver == "+stuff[x]);
    }
}

for(x in stuff){
    if(stuff[x]===random_value){console.log("Med Ver == "+stuff[x]);}
}
