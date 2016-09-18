/**
 * Created by Administrator on 2016/8/31.
 */
    //将编码转化成字符串
var StringDecoder=require("string_decoder").StringDecoder;
var str="和举报说不过没了怕";
var buf=new Buffer(str);
console.info(buf);

var decoder=new StringDecoder();
console.info(decoder.write(buf));

//将str存到两个Buffer对象中，第一个存放10，第二个存放20
var buf1=new Buffer([0xe5, 0x92, 0x8c, 0xe4, 0xb8, 0xbe, 0xe6, 0x8a, 0xa5, 0xe8]);
var bf2=new Buffer([0xaf, 0xb4, 0xe4, 0xb8, 0x8d, 0xe8, 0xbf, 0x87, 0xe6, 0xb2, 0xa1, 0xe4, 0xba, 0x86, 0xe6, 0x80, 0x95])
console.info(buf1.toString()+bf2.toString());//会乱码
//
////可以用Buffer合并的方法输出
var str3=Buffer.concat([buf1,bf2]);
console.info(str3.toString());//虽然解决了问题，但影响了系统的性能
//
////直接用StringDecoder对象中的write方法输出不会乱码
console.info(decoder.write(buf1));
console.info(decoder.write(bf2));
//
