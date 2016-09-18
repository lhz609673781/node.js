/**
 * Created by Administrator on 2016/9/4.
 */
var net=require("net");
var fs=require("fs");
var file=fs.createWriteStream("./temp.txt");
var server=net.createServer(function(socket){
    socket.setEncoding("utf8");
    /*
    可以利用socket对象中的pipe(destination,[options])来将接收到得数据写入到指定文件中
    destination:文件
    options:是一个对象，其中有一个boolean类型的属性end,该属性值如果为true,当数据全部接受完毕后，自动关闭写操作
    该默认值为true
    */
    socket.on("data",function(data){//当客户端有数据发送过来时，就会触发这个事件
        socket.pipe(file);//将接收到的数据全部存放到一个文件中

    })

    socket.on("end",function(){
        console.info("用户已经下线，数据写入完成..")

    })
    //当端口设置为0时，有系统自动随机分配一个端口
    server.listen(0,function(){
        console.info("服务器开始启动，监听的端口为：%j",server.address();)
    })
})