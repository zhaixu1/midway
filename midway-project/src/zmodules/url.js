var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
// true 是 url.parse() 方法的第二个参数，当设为true时，
// 会解析URL字符串中的查询字符串（也就是通常位于？后面的字符串），
// 并将结果作为一个对象返回。
  var q = url.parse(req.url, true);
  console.log(q.query);
  res.write(q.href);
  res.end();
}).listen(8080);