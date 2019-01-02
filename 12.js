/* 
后端模板(EJS模板):
    ejs模板是node.js中比较常用的后端模板引擎
    模板引擎可以实现数据与模板的整合,生成一个完整的html网页

    语法:
        var ejs = require("ejs");
        ejs.renderFile(模板路径,对象数据,回调函数);
*/

var http = require("http");
var server = http.createServer();
var ejs = require("ejs");   //引入ejs引擎

server.on("request",function(req,res){
    // req.writeHead(200,{
    //     "Content-Type":"text/html;charset=utf-8;"
    // })

    var ip = req.socket.remoteAddress;   //获取用户IP地址

    //使用ejs模板引擎进行模板渲染
    //{ip:ip}  ---> 键值对,键名和值是一样的时候,可以写一个{ip},这是ES6的写法
    ejs.renderFile("./tmpl.html",{ip:ip,user:['张三','李四','王麻子']},function(err,str){
        res.write(str);
        res.end();
    });
    
});
server.listen(80,function(){
    console.log("server is runing");
})
