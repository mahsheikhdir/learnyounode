var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function call(err, list){
    for (var i = 0; i < list.length; i++){
        if(list[i].split('.')[1] == ext){
            console.log(list[i])}
    }
})
