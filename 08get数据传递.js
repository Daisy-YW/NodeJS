/* 
客户端向服务器传递时数据:
    1. GET方式
        在URL后面添加 ? 写键值对形式就是GET方式传递数据
        只要可以写url的地方就可以在后面加 ? 传参数

        在nodejs可以接收到客户端传过来的参数值

    2.POST方式
        只有form可以实现POST方式提交,POSt方式提交的数据在请求主体
*/


// GET请求方式

var http = require("http");
var server = http.createServer();

server.on("request",function(req,res){
    //通过req.url后面参数字符串的解析,分析出传的参数和值
    var query = req.url.split("?");
    var value = query[1].split("=");

    //设置编码方式
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8;"
    })
    res.write(`<h1>你的传参数是${value[1]}</h1>`);
    res.end();
})

server.listen(80,function(){
    console.log("Server is runing...");
    
})