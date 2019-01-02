/* 
静态网页:   不会随着时间/参数/客户端的改变而改变
动态网页:   网页会随着时间/数据/参数/客户端的不同而改变
*/

var http = require("http");
var server = http.createServer();

server.on("request",function(req,res){
    console.log(req.url);

    res.writeHead(200,{
        "Content-Type":"text/html/charset=utf-8;"
    })
    var ip = req.socket.remoteAddress;
    res.write("<h1>你的IP地址是"+IP+"</h1>");
    res.end();
})
server.listen(80,function(){
    console.log("server is runing...")
})