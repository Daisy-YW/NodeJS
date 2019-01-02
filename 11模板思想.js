/* 
使用动态网页模板
    1>  什么是模板
        将一些固定的结构或表现，直接以静态文件形式储存，将需要表现成动态数据的地方使用模板语法进行编写，再使用模板引擎读取静态文件，将其他动态的数据进行替换进去，最终产生出一个动态的页面
*/


var http = require("http");
var server = http.createServer();
var fs = require("fs")


//定义一个渲染函数,用于将数据和html进行整合
function render(data,ip){
    console.log(data);
    return data.replace('<%=ip%>',ip);
}

server.on("request",function(req,res){
    console.log(req.url);

    var ip = req.socket.remoteAddress;
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8;"
    })
    
    // res.write("<h1>你的IP地址是"+IP+"</h1>");
    fs.readFile("./tmpl.html",function(err,data){
        //定义一个render函数
        res.write(render(data.toString(),ip));
        res.end();
    })
})
server.listen(80,function(){
    console.log("server is runing...")
})

