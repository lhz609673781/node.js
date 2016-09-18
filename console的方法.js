/*console.info(__dirname);//绝对目录
console.info(__filename);//绝对路径

//console的方法
//console.info("hvjdhfguiesngi");//信息
//console.log("hvjdhfguiesngi");//日志
//console.error("hvjdhfguiesngi");//错误
//console.warn("hvjdhfguiesngi");//警告

//程序运行的时间
console.time("zzz");//任意给定一个字符串，注意跟timeEnd("")中的保持前后一致即可
for(var i=0;i<100;i++){

}
console.timeEnd("zzz");

*/
//process
//process.stdout.write("greh");
//process.stderr.write("zzz");//字体变红

//process.stdout.write("请输入：");
//process.stdin.setEncoding("utf-8");//设置编码集
//process.stdin.on("data",function(data){//监听用户的输入，用户输入的信息会自动保存到回调函数的data中
//   console.info(data);
//})
//
process.stdout.write("请输入：");
process.stdin.setEncoding("utf-8");//设置编码集
process.stdin.on("readable",function(){//监听用户的输入，用户输入的信息会自动保存到回调函数的data中
   console.info(process.stdin.read());
})