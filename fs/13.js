/* 
    读取文件信息
    fs.stat('文件名',function(err,state){
        //state是文件的信息对象,包含了常用的文件信息
        size  文件大小(字节)
        ctime  文件创建时间
        mtime   文件修改时间
        birtime  文件第一次创建时间
        
        
        //方法
        state.isFile()   //判断当前查看文件是不是一个文件?true/false
        state.isDirectory()    // 判断当前文件是不是一个目录?true/false

    })
*/
var fs = require('fs');
fs.stat('./data.json',function(err,state){
    console.log(state);
    //输出信息size表述内容所占字节
    //换行占用两个字节---\n\r
    console.log(state.isFile());
    console.log(state.isDirectory());
})