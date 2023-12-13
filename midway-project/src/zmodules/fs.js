//引入fs模块
const fs = require('fs')
const path = require('path')
const os = require('os')

let filepath = path.join(__dirname, './data/test.txt')

fs.writeFileSync(filepath,`写入test.txt文件内容`);
