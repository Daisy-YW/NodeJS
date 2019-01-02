/* 
    http模块:
        1.get方法
            get方法用于模仿客户端从服务器中获取数据
        http.get('url',function(res){
            //res是返回对象,接收到服务器端响应的所有内容
        })
*/

var http = require("http");
var fs = require("fs");

http.get("http://www.itsource.cn",function(res){
    console.log(res);
    //以流的方式监听事件
  /*   res.on('data',function(a){
        console.log("-------------------------------")
        console.log(a.toString())
    }) */
    // 可以读取页面数据,也可以书写页面数据,在网址获取到的信息,可以添加导新的文件中,相当于下载了一个页面
    res.pipe(fs.createWriteStream('./a.html'));
})