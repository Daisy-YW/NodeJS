/* 
    删除文件
    fs.unlink(path,callback)
    fs.unlink('文件名',function(err){
        //...
    })
*/

var fs  = require('fs');

fs.unlink('./Jquery.js',function(err){
    if(err){
        throw err;
    }else{
        console.log('删除成功')
    }
})