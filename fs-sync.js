const { readFileSync ,writeFileSync } = require("fs");
let first = readFileSync("./built-in-modules/first.txt",'utf8');
let second = readFileSync("./built-in-modules/path/second.txt",'utf8');
console.log(first,second);
writeFileSync("./built-in-modules/third.txt",`hello ${first},${second}`, ) 
a