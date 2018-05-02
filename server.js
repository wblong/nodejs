var http = require("http");
var url = require("url");
//start
function start(route, handle) {
  //request
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("request:",pathname);
    request.setEncoding("utf8");
    //data
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
    });
    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });
  }
  //创建server
  http.createServer(onRequest).listen(8888);
}

exports.start = start;