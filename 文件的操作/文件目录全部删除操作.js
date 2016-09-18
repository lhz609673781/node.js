/**
 * Created by Administrator on 2016/9/5.
 */
var fs=require("fs");
function del(path){
    var stats=fs.lstatSync(path);
    if(stats.isFile()){
        fs.ublinkSync(path);

    }else if(stats.isDirectory()){
        var files=fs.readdirSync(path);
        for(var i=0;i<files.length;i++){
            del(path+"/"+files[i]);
        }
        //当前目录下所有文件或子目录都删除后就删除自己
        fs.rmdir(path);
    }
}
del("http.js");
del("yc");
console.info("完成！")