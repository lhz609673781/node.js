/**
 * Created by Administrator on 2016/9/11.
 */
var http=require("http");

var server=http.createServer(function(req,res){
    if(req.url!='/favicon.ico'){
        req.on("data",function(data){
            console.info(data);
            console.info("服务器接受到的数据为："+data.toString());
            res.end("哈哈，你真逗....")
        })
    }
}).listen(6868,"127.0.0.1",function(err){
    if(!err){
        console.info("服务器启动了...");

    }else{
        console.info(err);
    }
})