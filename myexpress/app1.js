/**
 * Created by Administrator on 2016/9/13.
 */
//路由功能
var app=require("express")();
//        请求的地址   路由中的正则表达式
app.get("/index.html/:id(\\d+)/:name?",function(req,res){
    console.info(req);
    var str="";
    //params: { id: '123', name: 'lhz' },
    for(var key in req.params){//params是req的一个属性
        if(str!=""){
            str+="<br/>"
        }//分别输出id和name的键值
        str+="参数名："+key+"参数值："+req.params[key].toString();
    }
    res.send(str);
})

app.listen(6868,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功")
    }
})
