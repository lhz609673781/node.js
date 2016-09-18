/**
 * Created by Administrator on 2016/8/30.
 */
var __name,__age;//私有变量，有两个下划线
var name="匿名",age=20;//公有变量
var yc=function(name,age){//构造方法，new这个对象时调用
    __name=name;
    __age=age;
}
//获取私有变量name的方法
yc.prototype.getName=function(){
    return __name;
}

//获取私有变量age的方法
yc.prototype.getAge=function(){
    return __age;
}

//提供一个公有方法，修改私有变量的值
yc.prototype.setName=function(name){
    __name=name;
}
//提供一个公有方法,用来允许用户修改私有属性age的值
yc.prototype.setAge=function(age){
    //做一些基本的判断
    if(age<10 || age>100){
        __age=18;
    }else{
        __age=age
    }


}

//提供一个公有的方法，输出名字和年龄
yc.prototype.toString=function(){
    return "name="+__name+"  age="+__age;
}
yc.prototype.name=name;//将初始化姓名传递到模块外
module.exports=yc;//将对象传递到模块外