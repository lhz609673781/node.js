/**
 * Created by Administrator on 2016/9/1.
 */
var fs=require("fs");
fs.rename("./yc.txt","./temp/abc.txt",function(err){
    if(err){
        console.info("文件移动失败。。。");
    }else{
        console.info("文件移动成功。。。")
    }
})

fs.rmdir("./temp",function(err){
    if(err){
        console.info(err);
    }else{
        console.info("目标删除成功。。。")
    }
});

fs.unlink("./temp/abc.txt",function(err){
    if(err){
        console.info(err);

    }else{
        console.info("文件删除失败....")
    }
})