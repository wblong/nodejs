//https://yq.aliyun.com/articles/7533?spm=a2c4e.11153940.blogcont6632.9.7d4f5e9arMnrm5
(function md2docs() {
    "use strict"
    const readline = require('readline')
    const fs = require("fs");
    //
    const file_out = "./out-" + (new Date()).getTime() + ".confluence"
    var file_input;

    if (process.argv.length <= 2) {
        console.log("Usage:" + process.argv[0] + " " + process.argv[1] + " filename.md");
        process.exit(1);
    } else {

        file_input = process.argv[2];
    }
    //开始计时
    var timeStart = process.hrtime();

    const r1 = readline.createInterface({
        input: fs.createReadStream(file_input)
    });

    r1.on('line', (line) => {
        if (!markdown2docs(line)) {
            fs.appendFileSync(file_out, line + "\n");
        }
    });

    var spendTime = process.hrtime(timeStart);
    console.log(spendTime);
    console.log("Cost time:" + (spendTime[0] * 1000 + spendTime[1] / 1000 / 1000) + "ms");
    //正则表达式
    function markdown2docs(line) {

        const md2docMap = {
            "^```java": "{code:java}",
            "^```js": "{code:js}",
            "^#### ": "h6. ",
            "^### ": "h5. ",
            "^## ": "h3. ",
            "^# ": "h1. ",
            "^```cpp": "{code:cpp}",
            "^```python": "{code:python}",
            "^```r": "{code:r}",
            "^```ruby": "{code:ruby}",
            "^```": "{code}",
        }

        var mdkeys = Object.keys(md2docMap);

        for (let i = 0; i < mdkeys.length; i++) {
            let key = mdkeys[i];
            let re = new RegExp(key);
            re.compile(re);
            if (re.test(line)) {
                let docLine = line.replace(re, md2docMap[key]);
                fs.appendFileSync(file_out, docLine + "\n");
                console.log(docLine);
                return true;
            }
        }
    };
})();