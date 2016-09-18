/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");
//fs.stat(path,callback)   查看文件或目录信息
//fs.stat("./yc1",function(err,stats){
//    if(err){
//        console.info("出错啦");
//    }else{
//        console.info("文件大小："+stats.size);
//    }
//})
//fs.stat("./yc1",function(err,stats){
//    console.info(stats.isFile());//判断是否是一个文件
//    console.info(stats.isDirectory());//判断是否是一个目录
//})
////查看所有文件信息
//fs.stat("./yc1",function(err,stats){
//    if(err){
//        console.info("出错啦。。");
//    }else{
//        console.info(stats);
//    }
//})

//fs.exists(path,callback);//判断文件或目录是否存在
fs.exists("./yc.txt",function(exists){
    console.info(exists);//true
})

//fs.realpath(path,[cache],callback);  获取文件或目录的绝对路径
fs.realpath("./yc.txt",function(err,path){
    if(!err){
        console.info(path);//输出指定文件的绝对路径
    }
})