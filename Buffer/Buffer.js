/**
 * Created by Administrator on 2016/8/30.
 */
var buf=new Buffer(10);//10位   16进制
buf.fill(10);//用10去填充buffer对象
console.info(buf);//所有的值都是16进制表示的

//创建指定值的buffer
var buf1=new Buffer([10,20,30,40,50]);
console.info(buf1);
//
////通过一个字符串来创建buffer对象，将自动换行字符串的输入和输出时的编码处理和解码的处理
////默认是utf的  支持的编码：ASCII utf8 utf16le base64 hex ucs2 binary(不推荐使用)
var buf2=new Buffer("huxhcu","utf-8");
console.info(buf2.length);//6
console.info(buf2);//<Buffer 68 75 78 68 63 75>
//
var str="你世锦赛的咖啡吧";
var buf3=new Buffer(str);
console.info(str.length);//8
console.info(buf3.length);//24   一个utf8字符占3个字节

////可以通过索引下标访问字符串对象或缓存区，但是在获取数据时，字符串对象也是以文字作为单位的，而缓存区对象以字节为一个单位
console.info(str[2]);//信
console.info(buf[2]);//144
//
////字符串对象一旦创建，将不能修改
str[1]=["成"];
console.info(str);
////但buffer对象是可以修改的，通过序号
////每个字占3个字节  获取str的第2个字要获取三个字节数字
//console.info(buf3[3]);
//console.info(buf3[4]);
//console.info(buf3[5]);
//
////更改第一个字节
//buf3[0]=228;
//buf3[1]=185;
//buf3[2]=150;
//console.info(buf3.toString());