/* 
客户端向服务器传递时数据:
    1. GET方式
        在URL后面添加 ? 写键值对形式就是GET方式传递数据
        只要可以写url的地方就可以在后面加 ? 传参数

        在nodejs可以接收到客户端传过来的参数值

    2.POST方式
        只有form可以实现POST方式提交,POST方式提交的数据在请求主体
*/

var http = require("http");
var server = http.createServer();
var fs = require("fs");
var path = require("path");

server.on("request",function(req,res){
  

    //定义一个动态页面
    if(req.url === '/action.html'){
        //从req请求主体中获取到POST方式获提交数据
        var str = "";
        req.on("data",function(a){
            str+=a.toString();
            console.log(str);
        });
        
        req.on("end",function(){
            res.writeHead(200,{
                "content-type":"text/html;charset=utf-8"
            })
            res.write("<h1>我们已经收到了请求</h1>");
            res.write("<h1>接收到的数据是:"+str+"</h1>");
            res.end();
        }); 
        return;
    }




    var fn = './www'+req.url;
    var ext = path.extname(fn);
    console.log(ext);  //获取后缀名
    var exts = {
        ".html":"text/html",
        ".css":"text/css",
        ".png":"image/png"
    }

    fs.readFile(fn,function(err,data){
        if(err){
            res.writeHead(404,{
                "Content-Type":"text/html;charset=utf-8;"
            });
            res.write("资源找不到");
            res.end();
        }else{
            res.writeHead(200,{
                "Content-Type":exts[ext]+";charset=utf-8;"
            })
            res.write(data);
            res.end();
        }
    })
})

server.listen(80,function(){
    console.log("服务器正在运行..."); 
})