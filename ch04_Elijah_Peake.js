// Sum and Range
const range = function(start, end) {
    let result = [];
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i--) {
        result.push(i);
      }
    }  
    return result;
  }
console.log(range(1, 10));
console.log(range(5, 2, -1));

const sum = function(numbers){
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
}
console.log(sum(range(1, 10)));


// Reversing an array
const reverseArray = function(array){
    let reverse = [];
    for(let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }
    return reverse;
}
console.log(reverseArray(["A", "B", "C"]))

reverseArrayInPlace = function(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);