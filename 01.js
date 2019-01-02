/* 
    path模块
        1)什么是path模块?
            path模块是node.js中提供的一个系统模块,用于格式化或拼接一个完整的路径
        2)path模块的常用方法
            //normalize       格式化路径
            path.join()     //[重点]将多个字符串拼接成一个完整的路径
            path.dirname()  //返回路径中的文件夹部分
            path.basename()   //返回路径中的文件部分
            path.extname()    //返回路径中的扩展名部分
            path.parse()      //[重点]解析路径:返回一个对象,包含路径中的各个部分

*/

var path = require('path')

//格式化化路径normalize
/* var p1 = "../../../path/../a/./b/../c.html";
console.log(path.normalize(p1)); */


//路径拼接
var p2 = './day02/hello/zs.html'
/* console.log(path.join('code',p2));
//__dirname---利用当前目录名进行拼接
console.log(path.join(__dirname,p2)); */


//返回路径中的文件夹部分
console.log(path.dirname(p2));
//返回路径中的文件部分(包含文件名以及扩展名)
console.log(path.basename(p2));  
//返回路径中的扩展名部分 
console.log(path.extname(p2));    //可以通过此技术限制用户上传的文件类型

//返回路径中的每一个部分
console.log(path.parse(p2))
console.log(path.parse(p2).ext)

