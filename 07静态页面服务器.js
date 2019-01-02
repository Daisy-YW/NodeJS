/* 
    需求:   制作一个静态网页服务器

*/

var http = require("http");
var server = http.createServer();
var fs = require("fs");
var path = require("path");

server.on("request",function(req,res){
    //优化版
    if(req.url == "/"){
        req.url = '/index.html';   //制作一个默认首页
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
                "Content-Type":"text/html;charset = utf-8;"
            });
            res.write("资源找不到");
            res.end();
        }else{
            res.writeHead(200,{
                "Content-Type":exts[ext]+";charset = utf-8;"
            })
            res.write(data);
            res.end();
        }
    })

    // if(req.url === "/" ||  req.url === "/index.html"){
    //     fs.readFile("./www/index.html",function(err,data){
    //         res.writeHead(200,{
    //             "Content-Type":"text/html;charset=utf-8;"
    //         })
    //         res.write(data);
    //         res.end();
    //     })
    // }
    // if(req.url === "/css/index.css"){
    //     fs.readFile("./www/css/index.css",function(err,data){
    //         res.writeHead(200,{
    //             "Content-Type":"text/css"
    //         })
    //         res.write(data);
    //         res.end();
    //     })
    // }
    // res.write("Hello");
    // res.end();
})

server.listen(80,function(){
    console.log("服务器正在运行..."); 
})