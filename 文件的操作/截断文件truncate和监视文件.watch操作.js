/**
 * Created by Administrator on 2016/9/5.
 */
var fs=require("fs");
fs.truncate("./file.txt",9,function(err){//只保留文件的前9个字节
    if(err){
        console.info(err);
    }else{
        console.info("文件截断成功...")
    }

})
//监视文件fs.watchFile(file,options,listener)
//options是一个整形数据，用来指定每隔多少毫秒监视文件是否发生改变

fs.watchFile("./file.txt",function(curr,prev){
    //console.info(curr);
    //console.info(prev);
    //console.info(Date.parse(curr.ctime))
    if(Date.parse(curr.ctime)==0){
        console.info("文件被删除了...");
    }else if(Date.parse(prve.mtime)!=Date.parse(curr.mtime)){
        console.info("文件被修改了...");
    }
})


