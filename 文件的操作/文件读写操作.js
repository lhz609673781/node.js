/**
 * Created by Administrator on 2016/8/31.
 */
    //文件的读操作
var fs=require("fs");
/*
    fs.writeFile(filename,data,[options],callback)
    filename:写入文件的路径和名称
    data：要写入的数据
    [options]：写入数据时的一些参数信息，这一项可选
        options参数为一个对象
            flag:用于指定以什么方式操作，默认是w;
            mode:指定文件被打开时的读写权限，默认0666（可读写）
                使用4个数据表示mode属性的值，其中第一个数字必须是0；
                第二个是指定文件或目录所有者的权限
                第三个是指定文件或目录所有者所属组的其他成员的权限
                第四个是指定根文件或目录所有者不再同一个组的其他用户的权限
                1：执行权限 001
                2：写权限  010
                4：读权限   100
*/
fs.writeFile("./file.txt","文件写入","utf8",function(err){
    if(err){
        console.info("写入文件失败。。。")
    }else{
        console.info("写入文件成功。。。")
    }
})

//异步
fs.readFile("./yc.txt","utf8",function(err,data){
    if(err){
        console.error("出错。。。");

    }else{
        console.info(data);
    }
})
console.info("结束。。。");

//同步
var data=fs.readFileSync("./Buffer.js","utf8");
console.info(data);
//
fs.appendFile("./file.txt","\r\n这是加的信息",{encoding:"utf8"},function(err){
    if(err){
        console.info("出错..");
    }else{
        console.info("文件追加完成...");
        console.info(fs.readFileSync("./file.txt").toString());
    }
})

//同步
fs.appendFileSync("./yc.txt","\r\n这是同步方式追加的数据...");
