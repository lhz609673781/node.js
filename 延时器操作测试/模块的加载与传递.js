/**
 * Created by Administrator on 2016/8/29.
 */

var test=function(msg){
    console.info(msg);
};
//多少毫秒之后执行指定方法一次，第一个参数是要执行的方法  时间    方法参数
var timer=setTimeout(test,1000,'hello world');

var count=1;
function test1(msg){
    console.info(msg+"  "+count);
    count++;
    if(count==10){
        clearInterval(mytimer);
    }
}
var mytimer=setInterval(test1, 1000,"你好")
//
//
var txt="hello world";
exports.test=test;
exports.txt=txt;
//
console.info("哈哈")
var output=function(){
    console.info("哈哈");
}

//exports.output=output;
