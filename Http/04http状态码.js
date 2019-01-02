/* 
Http状态码:
    1> 什么是状态码?
        http协议规定的服务器响应数据时的状态编码,就是状态码
    
    2> 常用的状态码
        1XX    代表普通消息,没有特殊函数
        2XX    代表服务器响应成功
            200     成功-[掌握]
        3XX     代表重定向
            301     永久重定向-[掌握]
            302     临时重定向
            304     使用缓存(服务器没有更新过)
        4XX     无法访问
            403     权限不足,无法访问
            404     资源找不到-[掌握]
        5XX     服务器有错
            500     服务器端代码有错-[掌握]
            502     网关错误
            503     服务器已崩溃

    3>状态码的使用 
        res.writeHead(状态码,响应头对象)

*/

var http = require("http");
var server  = http.createServer();

server.on('request',function(req,res){
    //书写响应头
    //成功编码200
    //内容类型:html方式解析,编码格式为utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8;"});
    res.write("<p>今天星期三,感觉好累哦,困得要死</p>");
    res.end();
})

server.listen(80,function(){
    console.log("服务器已运行...")
})
