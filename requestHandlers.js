// var querystring = require("querystring");
// var fs=require("fs");

// function start(response, postData) {
//     console.log("start:",postData.length)
//     response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//     //response.writeHead(200, {"Content-Type": "text/html"});
//     //同步读取
//     response.end(fs.readFileSync(__dirname + '/index.html'));
// }
// function upload(response, postData) {
//   console.log("upload:",postData.length)
//   response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//   //response.writeHead(200, {"Content-Type": "text/plain"});
//   var imgdata=querystring.parse(postData).imgdata;
//   //console.log(imgdata);
//   var imgname=querystring.parse(postData).imgname;
//   //console.log(imgname);
//   //\w+ 一个或多个字符
//   var base64Data = imgdata.replace(/^data:image\/\w+;base64,/, "");
//   console.log(base64Data);
//   var dataBuffer = new Buffer(base64Data, 'base64');
//   fs.writeFile(imgname+".png", dataBuffer, function(err) {
//         if(err){
//           response.write(err,function(err){response.end()});
//         }else{
//           response.write("保存成功！",function(err){response.end()});
//         }
//     });
//     //response.end();
// }
// exports.start = start;
// exports.upload = upload;
var querystring=require("querystring");
var fs=require("fs");

function start(response,postData){
  response.writeHead(200,{"Content-Type":"text/html";'charset=utf-8'});
  response.end(fs.readFileSync(__dirname+'./index.html'));
}
function upload(response,postData){
  response.writeHead(200,{"Content-Type":"text/plain"});
  var imgdata=querystring.parse(postData).imgdata;
  var imgname=querystring.parse(postData).imgname;
  var base64Data=imgdata.replace(/^data:image\/\w+;base64,/,"");
  var dataBuffer=new Buffer(base64Data,'base64');
  fs.writeFile(imgname+'.png',dataBuffer,function(err){
    if (err) {
      response.write(err,function(err){
        response.end();
      });
    }else{
      response.write("success",function(err){
        response.end();
      });
    }
  });
}
exports.start = start;
exports.upload = upload;