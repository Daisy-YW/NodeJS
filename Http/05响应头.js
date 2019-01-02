/* 
响应头:
    Content-Type:       响应的文件类型
        text/html

    Content-Length:     响应内容的长度
    Access-Control-Allow-Origin     设置响应头可以跨域

*/

var http = require('http');
var server = http.Server();

server.on("request",function(req,res){
    //设置响应头
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8",
        // "Content-Length":50     一般不定这个,否则会影响页面加载
        // 跨域
        //*代表全部
        //可以写网址baidu.com,意思就是只有百度内部的东西才可以被访问
        "Access-Control-Allow-Origin":"*"
    })
    res.write("<p>今天星期三...加油学习,努力挣钱</p>");
    //如果不写结束命令,网页会一直处于加载的状态
    res.end();
})

server.listen(80,function(){
    console.log("服务器正在运行...")
})