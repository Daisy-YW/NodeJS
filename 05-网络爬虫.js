/* 
    网络爬虫程序:
        1.什么是爬虫?
            网络爬虫又称为网络蜘蛛或网络机器人,是一种自动获取网页内容的程序,是搜索引擎的重要组成部分,按照衣服那个的规则,自动抓取万维网信息的程序.
        2.写一个爬虫程序,从昵图网批量下载图片
            url: http://www.nipic.com/photo/shengwu/haiyang/index.html


        开发思路:
            1.打开网页查看内容,找图片地址
                找规律 => 查看网页源代码
                大图:http://pic177.nipic.com/file/20180817/26242419_101810295000_2.jpg
                小图: http://pic177.nipic.com/pic/20180817/26242419_101810295000_4.jpg
            2.编写代码实现打开网页,获取所有的html内容
            
            3.通过正则表达式提取出有哪些图片地址

            4.遍历图片地址数组,一个一个请求

            5.将获取到的图片数据保存在硬盘上
*/
var http=require('http');
var fs=require('fs');

http.get('http://www.nipic.com/photo/jianzhu/shinei/index.html',function(res){
	var data=''; //定义一个变量用于存放一段一段的HTML数据
	//以流的方式读取数据
	res.on('data',function(a){
		data+=a.toString();
	});
	
	//绑定end事件
	res.on('end',function(){
		//data 就是当前网页的HTML内容
        //编写正则表达式提取所有的
        // 图片地址
		var reg=/<img*src="(.+?)"*\/>/;
		var arr=[];
		//var result=reg.exec(data); //.exec正则表达式方法：获取匹配到的结果，只能获取一个，指针自动自下移动
		var result='';
		while(result=reg.exec(data)){
			arr.push(result[1]);
		}
		console.log(arr)
		//根据数组中的图片地址获取图片数据
		for(var i in arr){
			(function(i){
				setTimeout(function(){
					getImg(arr[i]);
				},3000*i);
			})(i);
		}
	});
});

//定义一个函数用于获取图片内容
function getImg(url){
	
	url=url.replace('img89','pic148').replace('1.jpg','2.jpg').replace('img90','pic152');
	http.get(url,function(res){
		var fn=new Date().getTime();
		//创建一个可写流
		var stream=fs.createWriteStream('./files/'+fn+'.jpg');
		res.pipe(stream);
	});
}