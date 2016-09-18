/**
 * Created by Administrator on 2016/8/31.
 */
var http=require("http");
var fs=require("fs");
//将文件通过后台服务器传送给客户端
var server=http.createServer();
server.on("request",function(req,res){
    if(req.url="/" || req.url=="/index.html"){
        var data=fs.readFileSync("./index.html","utf8");
        res.write(data);
        res.end();
    }
})
server.listen(555);