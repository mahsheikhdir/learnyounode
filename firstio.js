var fs = require('fs');
var s =fs.readFileSync(process.argv[2]);
var str = s.toString();
var linesa = str.split("\n");
console.log(linesa.length - 1); 
