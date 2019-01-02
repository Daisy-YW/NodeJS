/* 
    URL模块:
        1.什么是url?
            url是全球统一资源定位符,对网站资源的一种简洁表达形式,也称为网址.
        2.url的构成
            完整结构:
                协议://用户名:密码@主机名.名.域:端口号(默认端口号8080)/目录名/文件名.扩展名?传参名=参数值&参数名2=参数值2#hash
            http协议的url常见结构
                协议://主机名.名.域/目录名/文件名.扩展名?传参名=参数值&参数名2=参数值2#hash
        3.node.js的URL模块
            在node.js中提供了两套对于url进行处理的API功能.
            1)老的node.js url模块
            2)新的url模块(WHATWG URL标准模块)

*/

var url = require('url')

var u = 'http://music.163.com:80/aaa/index.html?id=10#/discover/playlist';
//老的node.js的url模块
console.log(url.parse(u));

//新的node.js的url模块(符合WHATWG标准)
var obj = new url.URL(u);
console.log(obj.host)


