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

//apple()
// function sum(n1,n2){
//     return n1+n2;
// }
// function callSum1(n1,n2){
//     return sum.apply(this,arguments);
// }
// function callSum2(n1,n2){
//     return sum.apply(this,[n1,n2]);
// }
// console.log(callSum1(10,10));//20
// console.log(callSum2(10,10))//20

//call()
// var color="red";
// var o = {
//     color:"blue"
// }
// var c = {
//     color:"red"
// }
// function sayColor(){
//     console.log(this.color);
// }
// sayColor.call(c);//red
// sayColor.call(o);//blue

//bind()
var o = {
    color:"Red"
}
var c = {
    color:"blue"
}
function sayColor(){
    console.log(this.color);
}
var objSayColor = sayColor.bind(o);
objSayColor();//red
var objSayColor = sayColor.bind(c);
objSayColor();//blue
