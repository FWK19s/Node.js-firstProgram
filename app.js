// function sayHello(name) {
//     console.log('Hello ' + name);
// }
// sayHello('Oscar');

// let x = 10;
// let y = 10;
// console.log(x + y);

// function hello(x) {
//     console.log(x);
// }
// hello("HelloWorld");

// function greeting(name) {
//     console.log("Hello " + name)
// }
// greeting("Oscar");

// function secounds (x) {
//     console.log(x * 24 * 60 * 60);
// }
// secounds(1);

// function getFirstElement() {
//     let arr = [59,79,44];
//     console.log(arr[0]);
// }
// getFirstElement();

// function sum(x, y) {
//     console.log(x + y);
// }
// sum(4,7);

// function div(x) {
//     console.log(x % 3 === 0);
// }
// div(6);

// function str(x) {
//     console.log(x.length);
// }
// str("Hello friend I am learning nodejs");

// function arrReverse (x) {
//     console.log(x.reverse());
// }
// arrReverse([4,77,68]);

// function lastItem(x) {
//     console.log(x.pop());
// }
// lastItem([4,76,8,33,12]);

// function num(x) {
//     if (x % 3 === 0) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }
// num(56);






// function checkSpace(str) {
//     reg = /\s/;
//     console.log(reg.test(str));
// }
// checkSpace("hello");

// let http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('This is my first server with node.js');
// }).listen(8080);

// let http = require('http');
// let fs = require('fs');
// http.createServer( function (req, res) {
//   fs.readFile('index1.html', function (err, data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080)

let fs = require('fs');
fs.unlink('index1.html', function (err){
  if(err) throw err;
  console.log('file deleted!');
});