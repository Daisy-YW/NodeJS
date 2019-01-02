/* 
    node.js服务器
        1.引入通信模块
        2.创建服务器
        3.监听request事件
        4.监听端口

        访问服务器:
            1.打开浏览器
            2.输入网址: 
                127.0.0.1        本机地址
                localhost        当地主机,本机域名
                局域网IP         cmd输入ipconfig
*/

var http = require('http');

//创建服务器
var server = http.createServer();

//监听request请求事件,当前请求事件发生时就返回数据
server.on('request',function(req,res){
    //req:请求对象,包含了所有客户端请求的数据,请求头/请求主体
    //res:响应对象,包含了所有服务器端发送客户的数据:响应头/响应主体
    res.write('<h1>Hello Node.js</h1>');
    res.write('<h1>Hello 123</h1>');
    res.end();
});
//监听80端口
server.listen(80,function(){
    console.log('服务器已运行...')
})
