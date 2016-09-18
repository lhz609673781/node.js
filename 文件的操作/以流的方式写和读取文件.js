/**
 * Created by Administrator on 2016/9/2.
 */
var fs=require("fs");
var file=fs.createReadStream("./yc")//以流的方式读取文件
var out=fs.createWriteStream("./file.txt");//以流的方式写入文件
//var server=net.createServer();
file.on("open",function(fd){
    console.info("文件被打开了")
})
file.on("data",function(data){
    console.info("读取数据："+data);
    //将读到的数据写入到message.txt文件中
    out.write(data,function(data){
        //console.info(data.toString());
    })
})
file.on("end",function(){
    console.info("文件已经写入完成");

    out.end("\r\n完了",function(){
        console.info("完成");
    });
})
file.on("close",function(){
    console.info("文件被关闭")
})
file.on("error",function(err){
    console.info(err);
})