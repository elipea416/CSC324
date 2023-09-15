console.log("#\n\##\n###")

let name = "elijah ";
console.log(name + "is great");

function countChar(str, char, count = 0) {
    if (str.length == 0) {
      return count;
    }
    if (str[0] == char) {
      count += 1;
    }
    let smallerStr = str.slice(1);
    return countChar(smallerStr, char, count);
  }
  
  console.log(
    countChar(
      "bamboozle",
      "o"
    )
  );
  
  // with loop, to show debugging:
  function countCharLoop(str, char) {
    let count = 0;
    while (str.length > 0) {
      if (str[0] == char) {
        count += 1;
      }
      str = str.slice(1);
    }
    return count;
  }
  
  console.log(
    countCharLoop(
      "bamboozle",
      "o"
    )
  );