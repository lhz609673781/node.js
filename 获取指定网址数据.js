/**
 * Created by Administrator on 2016/9/4.
 */
var http=require("http");
var options={//http://www.baidu.com:80/index.html
    host:"127.0.0.1",
    post:6868,//可省略
    path:"/",
    method:"POST"
}
//                    options   对象
var req=http.request("http://www.baidu.com",function(res){
    console.info(res.statusCode);//获取响应码
    console.info(JSON.stringify(res.headers));//获取响应头信息并将其装换为一个json格式的字符串
    res.on("data",function(data){//获取整个百度的页面的信息
        console.info(data.toString())
    })
});
req.on("error",function(err){
    console.info(err);
})
req.end();