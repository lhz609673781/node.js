/**
 * Created by Administrator on 2016/9/1.
 */
/*fs.read(fd,buffer,offset,length,position,callback);
    fd:必须为open方法所使用的回调函数中返回的文件描述或openSync方法返回的文件描述符
    buffer：为一个Buffer对象，用于指定将文件数据读取到那个缓存区
    offset:指定向缓冲区中写入数据时的开始位置
    length：指定从文件中读取的字节数
    position：指定读取文件时的开始位置
    callback：function（errbyteRead,buffer){}

    ts.open("文件名",flag,回调函数);
    第二参数flag是指定以什么方式打开
    r:读的方式   w:写的方式  a:追加的方式
    回调函数，fd就是打开的这个文件的引用
*/
var fs=require("fs");
fs.open("./yc.txt","r",function(err,fd){
    if(err){
        console.info("以读的方式打开文件失败");
    }else{
        var buffer=new Buffer(255);

        //      len:实际读到的字节数    bf：读到的数据
        fs.read(fd,buffer,0,9,0,function(err,len,bf){
            console.info(buffer.toString());
            console.info(len);
            console.info(bf.slice(0,len).toString());
            /*position参数值用于指定读取文件时的开始位置(以字节为单位)，如果该参数为null，将从
            文件的当前被读取的位置处（前一次读取时的开始位置+读取的字节数）开始读取文件*/
            //console.info(bf.slice(0,len).toString());
           fs.read(fd,buffer,9,3,null,function(err,len1,bf1){
               console.info(buffer.toString());
                console.info(bf1.slice(9,12).toString());
           })
        })
    }
})



//同步加载读取文件
var fd=fs.openSync("./yc.txt","r");//同步加载不需要回调函数
var buf=new Buffer;
var len=fs.readSync(fd,buf,0,12);
console.info(buf.slice(0,len).toString());
len=fs.readSync(fd,buf,12,12,null);
console.info(buf.slice(0,24).toString());


//在文件后面写入buffer
var buf=new Buffer("哈哈，呵呵！");
fs.open("./yc.txt","a",function(err,fd){
    if(err){
        console.info("失败");
    }else{
        fs.write(fd,buf,0,6,0,function(err,writelen,buffer){
            if(err){
                console.info("失败");
            }else{
              fs.write(fd,buf,6,12,null,function(err,len,buffer){
                 if(err){
                     console.info("失败");
                  }else{
                       console.info("完成");
                 }
                })
            }
        })
    }
    fs.fsync(fd);  //fs.fsyncsync(fd);//刷新缓存
    fs.close(fd);//fs.closSync(fd)  //关闭
})