var http=require("http");
var options={
    host:"localhost",
    port:"8089",
    path:"/index.html"
};
var callback=function(response){
    var body="";
    response.on("data",function(data){
        body+=data;
    });
    response.on("end",function(){
        console.log("finished");
    });
}
var req=http.request(options,callback);
req.end();