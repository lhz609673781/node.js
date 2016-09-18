/**
 * Created by Administrator on 2016/8/29.
 */
var lhz=require("./模块的加载与传递");
console.info(lhz.test);//将test变量通过exports对象传递到模块外，其他模块就可以访问到这个变量了
console.info(lhz.txt);

//lhz.output();
var lhz2=require("./模块的加载与传递");
//lhz.output();