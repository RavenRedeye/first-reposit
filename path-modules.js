let path = require("path");
// path.sep gives us the path type of path separtor inthe current system
console.log(path.sep); 
let filepath = path.join("/built-in-modules","path","test.txt");
console.log(filepath);
 // gives us the base file 
 let base = path.basename(filepath)
 console.log(base);
//   path.resolve gives us the absolute path
 let absolute = path.resolve(__dirname,"built-in-modules","path","test.txt");
 console.log(absolute);