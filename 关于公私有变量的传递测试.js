/**
 * Created by Administrator on 2016/8/30.
 */
var yc=require("./yc1/node.js中的公有变量和私有变量");
var myyc=new yc();
console.info("获取公有属性name："+myyc.name);
console.info("获取公有属性age："+myyc.age);//我们在对象中并没有将此公有属性传递到模块外所以娶不到

console.info(myyc.getName());//取不到值  因为new的时候没有给定实参
var myyc1=new yc("lhz","20");
console.info(myyc1.getName());
console.info(myyc1.getAge());

myyc.setAge(110);
console.info(myyc.getAge())

myyc.setName("hjdhu");
console.log(myyc.getName());

console.info(myyc.toString());
console.info();