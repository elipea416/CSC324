// Elijah Peake
// Chapter 3

// Minimum
const min = function(num, nums){
    if(num <= nums){
        return(num);
    } else {
        return(nums);
    }
  }
console.log(min(0, 10,));

console.log(min(0, -10));





// Recursion

const isEven = function(num){
    if(num < 0){
        console.log("Need Positive Number");
        return;
    }
    if(num === 0){
        return(true);
    }
    else if(num === 1){
        return(false);
    } else {
        return isEven(num - 2)
    }
}
console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));




// Bean Counting

const ccountBs = function(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            count++;
        }
    }

    return count;
}
console.log(countBs("BBC"));

const countChar = function(str, charToCount) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToCount) {
            count++;
        }
    }

    return count;
}

console.log(countChar("kakkerlak", "k"));

