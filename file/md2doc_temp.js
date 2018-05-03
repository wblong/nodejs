(function md2docs(){

    'use strict'

    const fs =require('fs')
    const readline=require("readline")

    const file_out="./out_"+ (new Date()).getTime()+".confluence"
    var file_input;
    if (process.argv.length<=2) {
        console.log("Usage: " + process.argv[0] +" " +process.argv[1] + " filename.md" );
        process.exit(1);
    }else{
        file_input=process.argv[2];
    }
    var start_time=process.hrtime();
    const r1=readline.createInterface({
        input:fs.createReadStream(file_input)
    })
    r1.on('line',(line)=>{
        if(!markdown2doc(line)){
            fs.appendFileSync(file_out,line+'\n');
        }
    });
    var spendTime=process.hrtime(start_time);
    console.log(spendTime);
    console.log("Cost: "+(spendTime[0]*1000+spendTime[1]/1000/1000)+"ms");

    function markdown2doc(line){
        const md2docMap={
            "^```js":"{code:js}",
            "^```":"{code}",
            "^# ":"h1. ",
            "^## ":"h2. "
        }
        var keys=Object.keys(md2docMap);
        for(let i=0;i<keys.length;i++){
            let key=keys[i];
            let re=new RegExp(key);
            re.compile(re);
            if(re.test(line)){
                let docline=line.replace(re,md2docMap[key]);
                fs.appendFileSync(file_out,docline+'\n');
                console.log(docline);
                return true;
            }
        }
    }
})();