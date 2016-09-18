/**
 * Created by Administrator on 2016/9/12.
 */
function readFile(path,res){
    //先判断文件是否存在
    fs.exists(path,function(exists){
        if(exists){
            var file=fs.createReadStream(path);
            file.on("data",function(data){
                res.write(data);
            });

            file.on("end",function(){
                res.end();
            });
        }else{
            res.writeHeader(404,"Not Found",{"Content-Type":"text/html; charset=utf-8"});
            res.write("<h1>404页面未找到</h1>>");
            res.end();
        }
    })
    //如果是fileRead读文件的话，必须判断要读取的文件类型
    //fs.readFile(path,"binary",function(err,data){})
    //fs.readFile(path,"utf8",function(err,data){})

}