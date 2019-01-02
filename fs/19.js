/* 
    管道:
        1)什么是管道

            管道是node.js中流的实现机制,直接定义一个输出流.导出输入流
        2)管道语法
            输出流.pipe(输入流)
*/



//需求:实现大文件的复制
var fs = require("fs");

var s1 = fs.createReadStream('./file3.txt');
var s2 = fs.createWriteStream('./file6.txt');

//2.使用管道使用大文件的复制
s1.pipe(s2);



/* //1.以流的方式实现大文件,读一节存一节
s1.on('data',function(a){
    s2.write(a);
})
s1.on('end',function(){
    s2.end();
    console.log('文件复制已完成');
}) */

