var x = 2;
var sum = 0;
while(x<(process.argv.length)){
    sum+= +process.argv[x];
    x++;
    
}
console.log(sum);

