/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");
//异步方式创建目录

//fs.mkdir("./test",function(err){
//    if(err){
//        console.info("目录创建失败")
//    }else{
//        console.info("成功")
//    }
//})
////同步方式创建目录
//fs.mkdir("./temp");

//通过fs,readdir(path,callback)来读取目录

//获取的是一个所有目录下的文件集合
fs.readdir("./",function(err,files){
    if(err){
        console.info("读取目录失败")
    }else{
        console.info(files)//指定目录下的所有文件
    }
})

var fls=fs.readdirSync("./yc1");
console.info(fls);