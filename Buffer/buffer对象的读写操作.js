/**
 * Created by Administrator on 2016/8/31.
 */
    /*事件
       载入模块的方式
       npm命令
            npm install <-g> <package_name>
                uninstall
                update
            npm root -g
            npm config set prefix <path>
       二进制 buffer*/
var buf=new Buffer("改变明白了娃娃");
var str=buf.slice(3,6);//变
console.info(str.toString());
//修改通过slice（）方法取出的字符
str[0]=buf[0];
str[1]=buf[1];
str[2]=buf[2];

//str和buf共享一个内存区域   其中一个改变另一个也随之改变
console.info(buf.toString());

//buffer对象与字符串对象
console.info(buf.toString("utf8",0,12));
console.info(buf.toString("utf8",12));//从第十二个字节开始到最后

//buffer对象的write方法
var str="核算过哈我凑才能打死";
var bu=new Buffer(str);
console.info(bu.toString());

//重写buffer对象中的值
bu.write("jwjggg",0,10);
console.info(bu.toString());



