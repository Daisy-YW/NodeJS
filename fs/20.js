/* 
    链式流:
        将多个管道连接起来,实现链式处理
    需求: 使用链式流实现大文件压缩
*/

//
var fs = require("fs");
var zlib = require('zlib');

//创建一个可一读取的流
var s1 = fs.createReadStream('./file3.txt');
var s2 = fs.createWriteStream('./file3.txt.zip');


//将s1的内容复制并压缩给s2
s1.pipe(zlib.createGzip()).pipe(s2);