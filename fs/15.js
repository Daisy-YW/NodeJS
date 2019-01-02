/* 
    目录操作
        1.创建目录
            fs.mkdir('目录名',function(err){
            })
        2.读取目录中的文件及文件夹的列表
            fs.reddir('目录名',function(err.list){
                //list是一个包含目录名及文件名的数组 
            })
        3.删除空目录
            fs.rmdir('目录名',function(){

            })
            //注意: 不能删除非空目录
*/

var fs = require('fs');
//创建目录
/* fs.mkdir("./111",function(){
    console.log("创建目录成功")
}) */
//读取目录信息
/* fs.readdir('./111',function(err,list){
    console.log(list)
}) */
//删除目录
/* fs.rmdir("./111",function(err){
    if(err){
        throw err;
    }else{
        console.log('删除成功')
    }
}) */