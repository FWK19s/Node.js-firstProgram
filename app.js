function sayHello(name) {
    console.log('Hello ' + name);
}
sayHello('Oscar');

let x = 10;
let y = 10;
console.log(x + y);

function hello(x) {
    console.log(x);
}
hello("HelloWorld");

function greeting(name) {
    console.log("Hello " + name)
}
greeting("Oscar");

function secounds (x) {
    console.log(x * 24 * 60 * 60);
}
secounds(1);

function getFirstElement() {
    let arr = [59,79,44];
    console.log(arr[0]);
}
getFirstElement();

function sum(x, y) {
    console.log(x + y);
}
sum(4,7);

function div(x) {
    console.log(x % 3 === 0);
}
div(6);

function str(x) {
    console.log(x.length);
}
str("Hello friend I am learning nodejs");

function arrReverse (x) {
    console.log(x.reverse());
}
arrReverse([4,77,68]);

function lastItem(x) {
    console.log(x.pop());
}
lastItem([4,76,8,33,12]);

function num(x) {
    if (x % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
num(56);

function checkSpace(str) {
    console.log((/\s/).test(str));
}
checkSpace("hello");


