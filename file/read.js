
// "use strict"
// const readline = require('readline')
// const fs = require("fs");

// const r1 = readline.createInterface({
//     input: fs.createReadStream("test.txt")
// });

// var i = 1;
// r1.on('line', (line) => {
//     console.log('Line from file:' + i + ":" + line);
//     i += 1;
// });

"use strict"
const readline=require("readline")
const fs=require("fs")

const r1=readline.createInterface({
    input:fs.createReadStream("test.txt")
});

var i=1;
r1.on('line',(line)=>{
    console.log("line from file:"+i+":"line);
    i+=1;
});