//js跳出多重循环
outter:for(var i=1;i<10;i++){
    for(var j=1;j<5;j++){
        if(i*j==15){
            break outter;
        }
        console.info(i+"  "+j);
    }
    console.info(i+"...");
}

var req={
    session:{
        user:{
            uname:'lhz',
            age:'20'
        }

    }
}
//输出各个键值
console.info(req.session.user.uname);
console.info(req.session.user.age);

////循环输出
for(var attr in req.session.user){
    console.info(attr+":"+req.session.user[attr]);
}


with(req.session.user) {
    console.info(uname + "  " + age);
}