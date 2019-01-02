var fs = require("fs");
//写入流
//创建一个可以写入的流
var streams = fs.createWriteStream("./file4.txt");

//写入数据
streams.write("昨天");
streams.write("今天");
streams.write("明天");
//以流的方式写入数据必须说明结束
streams.end();
//写入流的事件,finish时间
streams.on('finish',function(){
    console.log('写完了')
})

//写入流的事件,error错误事件
streams.on("error",function(err){
    console.log("写入出错了")
})