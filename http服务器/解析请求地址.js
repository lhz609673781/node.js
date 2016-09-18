/**
 * Created by Administrator on 2016/9/6.
 */
var http=require("http");
var querystring=require("querystring");
var server=http.createServer().listen(8888,function(){
    console.info("服务器已经启动..."); 
})
//当有客户端请求时触发这个事件
server.on("request",function(req,res){
    if(req.url!="/favicon.ico"){//当请求的地址不是图标的时候
        var urls=req.url;   //字符串后面可能接用户名和密码
        urls=urls.replace("/?","");//如果地址里有这个符号就用空字符串代替
        var obj=querystring.parse(urls);//解析这个地址
        //console.info(obj);  { '/': '' }
        console.info("用户名："+obj.uname);    //undefined
        console.info("密码："+obj.pwd);      //undefined
        res.end();
    }

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