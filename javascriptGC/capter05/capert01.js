//创建对象的两种方式

//使用构造函数创建对象
// var person = new Object();
// person.name = "snail";
// person.say = function(){
//     console.log("i am "+this.name);
// }
// person.say();
// //使用字面量创建对象
// var person = {
//     name:"snail",
//     say:function () {
//         console.log(" i am "+this.name);
//     }
// }
// person.say();
//
// var arr = new Array(20);
// console.log(arr.length);
// var arr = new Array("i","s");
// console.log(arr.length);

//date类型
// var now = new Date();
// // var s = Date.parse("yyyy-MM-dd HH:mm:ss");
// // console.log(s);

//函数
// function add(){
//     console.log(1);
// }
// function add(){
//     console.log(2);
// }
// //等价于,因此可以理解函数没有重载的概念
// var add = function(){console.log(1)};
// add = function(){console.log(2)};

//关于arguments和callee的经典阶乘,解决了方法体与方法名的紧耦合
// function factorial(num){
//     if(num<=1){
//         return num;
//     }else{
//         return num * factorial(num-1);
//     }
// }
// function factorial(num){
//     if(num<=1){
//         return num;
//     }else{
//         return arguments.callee(num-1)*num;
//     }
// }
//
// //this
// color = "red";
// function say(){
//     console.log(this.color);
// }
// say();
// var obj = {
//     color:"blue"
// }
// obj.say = say;
// obj.say();