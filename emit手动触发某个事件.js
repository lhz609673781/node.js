/**
 * Created by Administrator on 2016/8/30.
 */
var http=require("http");
var server=http.createServer();
//手动触发某个事件
server.on("lhzinfo",function(tag1,tag2){
    console.info("输出信息。。。。");
    console.info(tag1+tag2);
})
//                    函数的两个参数
server.emit("lhzinfo",20,30);//触发自定义事件
server.listen(8888);
