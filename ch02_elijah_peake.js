// Elijah Peake
// Chapter 2

// Looping a Triangle
let lines = "#";
while (line.length <= 7){
    console.log(line);
    line = line + "#";
}


// FizzBuzz
let number = 0;
while (number <= 100) {
    if (number % 3 == 0 & number % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 == 0){
        console.log("Fizz");
    }
    else if (number % 5 == 0){
    console.log("Buzz")
 }
 else console.log(number);
 number += 1
}



// Chessboard
let tag = "";
let size = 8;

for (let sizeL = size; sizeL >= 1; sizeL --) {
    for (let length = size; length >= 1; length--) {
        if ((sizeL + length) % 2 === 0) {
            tag += "#";
        } else {
            tag += " ";
        }
    }
    tag += "\n";
}

console.log(tag);