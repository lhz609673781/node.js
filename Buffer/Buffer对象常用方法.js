/**
 * Created by Administrator on 2016/8/31.
 */
var buf=new Buffer([0x10,0x20]);
//console.info(buf.readUInt8(0));//8位无符号整形
//console.info(buf.readUInt8(1));
//
//buf.writeUInt8(30,0);//数值   位置
//console.info(buf);
buf.writeInt8(-1);//
console.info(buf);//ff 20
console.info(buf.readInt8());//-1
console.info(buf.readUInt8());//255   -1的补码
//////将buffer对象中保存的数据转化为一个json格式的字符串
//var buf1=new Buffer("你参加女警女教师报文");
//console.info(buf1);
//var json=JSON.stringify(buf1);
//console.info(json);//这是一个json字符串
////
//var jsonObj=JSON.parse(json);//这是一个json对象
//console.info(jsonObj.data);
////
//////将json对象转为字符串
//var str=new Buffer(JSON.parse(json));
//console.info(str);
//console.info(str.toString());
////
//var buf1=new Buffer("黑发和我出生地女的");
//var copyBuf=new Buffer();
/////*
////    第一个参数是将源数据复制到新的对象
////    第二个参数是从新对象的那个位置开始存放复制过来的数据
////    第三个参数是从源数据那个位置开始复制
////    第四个参数是从源数据中复制的长度，默认是源数据的长度
////* */
//buf1.copy(copyBuf,0,0,12);
//console.info(copyBuf.toString());
//
