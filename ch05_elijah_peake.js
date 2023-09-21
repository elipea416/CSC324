// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedArray = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);
// → [1, 2, 3, 4, 5, 6]





// Write your own loop
loop = function(value, test, update, body) {
    while (test(value)) {
      body(value);
      value = update(value);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);

  






// Everything
every = function(array, test) {
    for (let element of array) {
      if (!test(element)) {
        return false;
      }
    }
    return true;
  }
  console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Some 

  everySome = function(array, test) {
    return !array.some(element => !test(element));
  }
  console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true

  
  