/* 
    网页响应内容
        需求: 根据用户的请求地址(URL),判断响应不同的数据,实现访问不同的url得到不同的结果
        核心: req.url     获取到用户请求的网址
*/

var http = require('http');

//创建服务器
var server = http.createServer();

//监听request请求事件,当前请求事件发生时就返回数据
server.on('request',function(req,res){
    //req:请求对象,包含了所有客户端请求的数据,请求头/请求主体
    //res:响应对象,包含了所有服务器端发送客户的数据:响应头/响应主体
    console.log(req.url)
    if(req.url === "/"){
        res.write("<h1>Homepage</h1>")
    }

    if(req.url === "/article.html"){
        res.write("<h1>Article Page</h1>")
    }

    if(req.url === "/about.html"){
        res.write("<h1>About Page</h1>")
    }
    res.end();
});
//监听80端口,如果不开端口监听,程序运行后就直接结束了
server.listen(80,function(){
    console.log('服务器已运行...')
})
