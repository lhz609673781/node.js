var http=require('http');//引入http模块
/*http.createServer(function(request,response){//创建一个服务器
    //request:请求对象  客户端发送给服务器必须要用这个函数
    //response:响应对象   服务器发送给客户端必须要用这个函数
    response.write("hello World");
    response.end();//基于应答模式
}).listen(666,'127.0.0.1');//监听窗口   监听地址和端口号，如果监听所有地址，ip可以省略

console.info("服务器已经启动，端口号为666")*/

var server=http.createServer();
server.on("request",function(req,res){//客户端每发一次请求，就会触发这个监听事件
    console.info(req.url);//   /
    res.write("<meta charset='utf-8'>")
    res.write("谢谢访问...");
    res.end();
})
server.listen(666);//启动服务器并监听666端口