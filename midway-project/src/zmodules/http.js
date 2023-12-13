//1.引入http模块，用于搭建服务器。
const http = require("http");
//2.创建服务，传入一个回调函数.当有请求进来的时候，该回调就会执行。
//req:请求对象  包含请求信息和对应的方法
//res:响应对象  包含响应信息和对应的方法
let app = http.createServer((req,res)=>{
    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
      }
  // 设置响应头部
    // 创建一个 JavaScript 对象
    const data = {
        name: '铁仔',
        message: 'Hello, World!'
      };
       // 将对象转换为 JSON 字符串
  const json = JSON.stringify(data);
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

 //3.当有请求进来，我们给浏览器一个响应。
  res.end(json);
});
//4.添加端口监听   每一个软件启动都需要一个端口
app.listen(3000);
//这是一条提示信息而已
console.log("服务已启动！");
