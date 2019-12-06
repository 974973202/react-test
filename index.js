const linebyline = require('linebyline');
const fs = require('fs')

/**
 * 一行一行地读取文件路径
 * @param filePath 文件路径
 * @param lineCb 读取文件一行数据后的回调函数  (line, lineCount, byteCount)=>{}
 * @param endCb 读取文件结束时的回调
 */
// function readLine (filePath, lineCb) {
//   let rl = linebyline(filePath)
//   rl.on("line", lineCb)
//     .on('error', err => {
//       console.error(err)
//     })
//     .on('end', end => {
//       console.log(123)
//     })
// }
// readLine(__dirname + '/package.json', (line, lineCount, byteCount) => {
//   console.log(line, typeof line)
// })
// console.log(__dirname + '/package.json')
// console.log(fs.readdirSync(__dirname + '/src'))

// const dns = require('dns');

// dns.lookup('www.baidu.com', { all: true }, (err, address, family) => {
//   if(err) throw err.message;
//   console.log(address, family)
// })

// var EventEmitter = require('events');

// class Man extends EventEmitter {}

// var man = new Man();

// man.on('wakeup', function(){
//     console.log('man has woken up'); // 代码1
// });

// man.emit('wakeup');

// console.log('woman has woken up');

// fs.writeFile('./fileForWrite.txt', 'hello world111', 'utf8', function(err){
//   if(err) throw err;
//   console.log('文件写入成功');
// });

// try {
//   const f = fs.unlinkSync('./fileForWrite.txt');
// } catch(e) {
//   console.log(e.message)
// }

// var getTimeDesc = function(d){
//   return [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
// };

// fs.stat('./fileForWrite.txt', function(err, stats){
//   if(err) return err
//   console.log('文件大小: ', stats.size);
//   console.log('创建时间: ', getTimeDesc(stats.birthtime));
//   console.log('访问时间: ', getTimeDesc(stats.atime));
//   console.log('修改时间: ', getTimeDesc(stats.mtime));
// });


// const path = require('path')
// console.log(process.argv)

// process.argv.forEach(function(val, index, array) {
//   console.log('参数' + index + ': ' + val);
// });

const path = require('path');
// fs.readFile('./fileForWrite.txt', 'utf8', function(err, content){
//   // console.log('文件读取完成，文件内容是 [%s]', content);
//   // console.log(content, path.resolve(__dirname, 'test.txt'))
//   content.pipe(fs.createWriteStream(path.resolve(__dirname, 'test.txt')))
// });

// // 两个文件名
// const fileName1 = path.resolve(__dirname, 'fileForWrite.txt')
// const fileName2 = path.resolve(__dirname, 'test.txt')
// // 读取文件的 stream 对象
// const readStream = fs.createReadStream(fileName1)
// // 写入文件的 stream 对象
// const writeStream = fs.createWriteStream(fileName2)
// // 通过 pipe执行拷贝，数据流转
// readStream.pipe(writeStream)
