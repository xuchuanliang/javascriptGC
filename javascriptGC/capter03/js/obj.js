//Object对象通用方法
// var obj = new Object();
// console.log(obj.constructor); //[Function: Object]

//没有块级作用域
// for(var i=1; i<100; i++){
//     var a = i;
// }
// console.log(a);

//函数形参通过arguments数组获取
// function hi(){
//     console.log(arguments[0]+';'+arguments[1]);//你好;snail
//     console.log(arguments)//{ '0': '你好', '1': 'snail' }
// }
// hi('你好','snail');

//形参双向绑定
// function hi(num1,num2){
//     arguments[0] = 1;
//     num2 = 1;
//     console.log(arguments[0]+arguments[1]);
// }
// hi(20,20);

//函数没有重载
function hi(){
    console.log('hi i am NO1')
}
function hi(){
    console.log('hi i am NO2')
}
hi();