/**
 * Created by Administrator on 2016/9/6.
 */
var http=require("http");
var fs=require("fs");
var server=http.createServer().listen(6666,function(){
    console.info("服务器已经启动...");

})
//当有客户端请求时出发这个事件
server.on("request",function(req,res){
    console.info(req.url);//获取客户端请求的资料地址
    fs.readFile("./file.txt",function(err,data){
        if(!err){
            res.write("<meta charset='utf-8'>");
            res.write(data.toString());
            res.end("bye");
        }else{
            console.info(err);
        }
    })
});

//当有客户端连接到服务器时触发
server.on("connection",function(socket){
    console.info(socket.address().address);
});

server.on("close",function(){
    console.info("服务器被关闭...")
})
server.on("error",function(err){
    console.info(err);
    if(err.code=="EADDRINUSE"){
        console.info("端口号被占用..")
    }
})