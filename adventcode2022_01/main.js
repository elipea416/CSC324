const fs = require("fs");
let targetFile = (process.cwd() + "/adventcode2022_01/input.txt");
let input = fs.readFileSync(targetFile);
console.log(input.toString());