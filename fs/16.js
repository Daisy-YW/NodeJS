/* 
    需求:编写代码实现删除一个非空目录
    2.读取目录中的文件及文件夹列表哦
        fs.readdir()
    3.读取每一个文件的详细信息
        fs.stat()
    4.判断是文件
        fs.unlink()
    5.判断如果是目录
        递归调用自己
    6.删除空目录
        fs.rmdir()
*/

var fs =require('fs');

/* function dedir(path){
    fs.readdir(path,function(err,list){
        console.log(list);
        //循环遍历查询内容是文件还是文件夹
        list.forEach(function(v,i){
            //遍历路径下的各个文件
            fs.stat(path+"/"+v,function(err,stats){
                console.log('是不是文件'+stats.isFile());
                //判断是否为文件
                if(stat.isFile()){
                    fs.unlink(path+'/'+v,fucntion(err){
                        //可以做无限层的回调---回调地狱
                    })
                }
            })
        })
    })
} */

//使用同步的方式实现
function dedir(p){
    var list = fs.readdirSync(p);
    console.log(list);
    list.forEach(function(v,i){
        var fn = p+"/"+v;
        console.log(fn)
        var stats = fs.statSync(fn);
        if (stats.isFile()){
            console.log(fn+"是一个文件");
            //如果是文件就删除他
            fs.unlinkSync(fn);
        }else{
            console.log(fn+"是一个文件夹");
            //如果是目录就调用自身,递归调用
            arguments.callee(fn);
        }
    });
    //删除空目录
    fs.rmdir(p)
}


dedir('./data');