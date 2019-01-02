/* 
    1.什么是流?
        所有互联网传输的数据都是以流的方式，流式一组有起点有重点的数据传输方式
    2.流的操作
        1）流式读取文件
            一节一节的读取数据,一节64Kb ==> 65536字节

        2）流式书写文件
            一节一节的写文件

*/






var fs = require("fs");
//读取文件
var stream = fs.createReadStream('./file3.txt');
//绑定data事件,当读取到内容就执行
stream.on('data',function(a){
    console.log("-------------");
    console.log(a.length);
});

//读取流的事件:完成事件
stream.on('end',function(){
    console.log('数据读完了');
});

//读取流事件:error事件
stream.on('error',function(){
    console.log('数据出错了');
});