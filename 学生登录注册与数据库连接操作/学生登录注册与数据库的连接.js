/**
 * Created by Administrator on 2016/9/12.
 */
//客户端名为   reg.html

var http=require("http");
var mysql=require("mysql");
var querystring=require("querystring");
var fs=require("fs");
var url=require("url");

var server=http.createServer().listen(5858,function(){
    console.info("服务器已经启动")
});

var pool=mysql.createPool({//创建数据库连接池
    host:"127.0.0.1",
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa",
    connectionLimit:20,
    queueLimit:10
})

server.on("request",function(req,res){
    if(req.url!="/favicon.ico"){
        var urlObj=url.parse(req.url);//先解析请求的地址
        var path=urlObj.pathname;//路径

        if(path=="/"){//当地址为“/”时，直接读取文件
            readFile("./login.html",res);//登录注册的页面
        }else if(path=="/getAllClassInfo"){
            //获取所有班级信息
            //数据库获得连接
            pool.getConnection(function(err,connection){
                if(err){
                    //返回响应头
                    res.writeHeader(200,"OK",{"Content-Type":"text/json"});
                    res.write('{"code":"0"}');//若错误会返回此json段
                    res.end();
                }else{
                    //查询所有的班级信息
                    connection.query("select * from classInfo order by cid asc",function(err,rows){
                        if(err){
                            res.writeHeader(200,"OK",{"Content-Type":"text/json"});
                            res.write('{"code":"1"}');
                            res.end();
                        }else{//将查询到的数据rowsy以json字符串的形式输出
                            res.write(JSON.stringify(rows));
                            res.end();
                        }
                    })
                }
            })
        }else if(path=='/adduser'){//说明是学生注册
            //注意此时我们使用的是POST提交方式，数据不在url里面,所以不能直接从url中获取
            //POST提交数据时，请求头信息和数据是分开传送的，先发送请求头信息，然后再发送数据，所以我们需要通过监听来完成数据接收
            //获取学生注册信息
            req.on("data",function(data){//将获得的数据字符串解析成对象
                var dataInfo=querystring.parse(data.toString());
               // console.info(dataInfo);
                if(dataInfo.sex==""){
                    res.write(" 2")//性别为空时返回一个 2
                    res.end();
                }else {
                    dataInfo["sid"] = 0;

                    //将用户提交的注册信息存到数据库
                    pool.getConnection(function (err, connection) {
                        if (err) {//如果获取连接失败，则返回一个0
                            res.write("0");
                            res.end();
                        } else {
                           console.info(dataInfo);//将注册的信息插入到数据库
                            connection.query("insert into stuInfo set ?", dataInfo, function (err, result) {
                                if (err) {
                                    res.write("1");//添加数据失败
                                } else {
                                    console.info(result);
                                    res.write(result.insertId +Number(10000));
                                }
                                res.end();
                            })
                        }
                    })
                }
                })
        }else if(path=="/userLogin"){//说明是学生登录
            //那么一定有学号和密码传过来，所以我们必须监听它传过来的数据
            req.on("data",function(data){
                var dataInfo=querystring.parse(data.toString());

                if(dataInfo.sid==""){//说明学号为空
                    res.write("1");
                    res.end();
                }else if(dataInfo.pwd==""){//说明密码为空
                    res.write("2");
                    res.end();
                }else{//说明学生输入了学号和密码，则我们需要从数据库面查询有没有这样的学生，根据给定的学号和密码
                    pool.getConnection(function(err,connection){
                        if(err){
                            res.write("3");//获取数据库的链接失败
                            res.end();
                        }else{
                            //使用查询语句
                            connection.query("select * from stuInfo where sid=? and pwd=?",[dataInfo.sid,dataInfo.pwd],function(err,result){
                                if(err){
                                    res.write("4");//说明数据库查询失败
                                }else{
                                    if(result.length==0){//当返回的结果长度为0，说明学号或密码错误
                                        res.write("0");
                                    }else{//登录成功
                                        res.write("5");
                                    }
                                }
                                connection.release();//释放连接
                                res.end();
                            })
                        }
                    })
                }
            })
        }else if(path=="/findAllStuInfo"){
            //查询所有的学生信息
            pool.getConnection(function(err,connection){
                if(err){//若连接错误则返回响应头信息
                res.writeHeader(500,'ERROR',{"Content-Type":"text/json"});
                res.write('{"code":"0"}');
                    res.end();
            }else{
                connection.query("select s.*,cname from stuInfo s inner join classInfo c on s.cid=c.cid",function(err,result){
                    if(err){//若查询失败
                    res.writeHeader(500,"ERROR",{"Content-Type":"text/json"});
                        res.write('{"code":"1"}');
                }else{
                    res.writeHeader(200,"OK",{"Content-Type":"text/json"});
                        res.write(JSON.stringify(result));//以json字符串的形式输出
                }
                  res.end();
                })
            }

            });
        }else{
            readFile("."+path,res);//如果是别的路径，将不响应
        }
    }else{
        res.end();
    }


});

//读取指定路径的文件
function readFile(path,res){
    //先判断文件是否存在
    fs.exists(path,function(exists){
        if(exists){//以流的方式读取文件
            var file=fs.createReadStream(path);
            file.on("data",function(data){
                res.write(data);//向客户端传送数据
            });

            file.on("end",function(){
                res.end();
            });
        }else{//如果不存在这个文件则发送服务器响应流
            res.writeHeader(404,"Not Found",{"Content-Type":"text/html; charset=utf-8"});
            res.write("<h1>404页面未找到</h1>>");
            res.end();
        }
    })
    //如果是fileRead读文件的话，必须判断要读取的文件类型
    //fs.readFile(path,"binary",function(err,data){})
    //fs.readFile(path,"utf8",function(err,data){})

}