## test1
### test2
```js
  var spendTime = process.hrtime(timeStart);
  console.log(spendTime);
  console.log("Cost time:" + (spendTime[0] * 1000 + spendTime[1] / 1000 / 1000) + "ms");
```