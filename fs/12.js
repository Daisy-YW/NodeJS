// Nodejs异步书写文件


//引入fs
var fs = require('fs');
var hello = "<h1>你好</h1>";
//书写文件;
fs.writeFile('index.html',hello,function(err){
    if(err){
        //抛出错误
        //一旦出现错误,就停止运行,抛出错误到控制台上
        throw err;
    }else{
        console.log('文件写入成功')
    }
})