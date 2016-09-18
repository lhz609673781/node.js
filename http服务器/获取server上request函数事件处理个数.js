/**
 * Created by Administrator on 2016/8/30.
 */
    /*
    addListener()  on()
    once()
    removeAllListener()
    setMaxListeners()
    listeners()
    emit()
    */
var http=require("http");
var server=http.createServer();
var events=require("events");
var testFun=function(req,res){
    if(req.url!="/favicon.icon"){
        console.info("这是一个函数")
    }
}
//通过on对同一个事件绑定多个事件处理函数
server.on("request",function(req,res){
    if(req.url!="/favicon.icon"){
        console.info("接受到了图标信息");

    }
})
server.on("request",function(req,res){
    if(req.url!="favicon.icon"){
        console.info("发送响应信息hahhahahaha");
        res.write("vsdgdfh");
        res.end();
    }
})
server.on("request",function(req,res){
    if(req.url!="/favicon.icon"){
        console.info("发送响应完毕...");
        res.write("<!doctype html><head><title>哈哈</title><meta charset='utf-8'></head></html>");
        res.write("<body><h1>欢迎欢迎....</h1></body>");
        res.end();
    }
})
server.on("request",testFun);//将事件处理函数绑定在req上
server.removeListener("request",testFun);//移除request上的testFun事件处理函数
server.listen(8888);
//获取server上request函数事件处理个数
console.info(events.EventEmitter.listenerCount(server,"request"));