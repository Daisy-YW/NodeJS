/* 
MIME类型
    1.什么是MIME类型?
        MIME类型可以认为是文件类型的表述

    2.常用的MIME类型
        .html   text/html
        .css    text/css
        .js     text/javascript
        .png    image/png
        .jpg    image/jpeg
        .gif    image/gif
        .json   text/json   application/json
        .mp3    audio/mpeg
        .mp4    video/mpeg
        .pdf    application/pdf
        .xml    text/xml
        .zip    application/x-gzip
        ...
*/
/* <style type="text/css"></style>
<script type="text/javascript"></script> */

var http = require("http");
var server = http.Server();

server.on("request",function(req,res){
    res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"   //普通文本
        // "Content-Type":"image/png"
        // "Content-Type":"application/x-gzip"   //生成一个压缩包,浏览器自动下载
    })
    res.write("<p>今天星期三...加油学习,努力挣钱</p>");
    res.end();
})
server.listen(80,function(){
    console.log("服务器正在运行...")
})
