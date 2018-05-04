//创建对象的两种方式

//使用构造函数创建对象
var person = new Object();
person.name = "snail";
person.say = function(){
    console.log("i am "+this.name);
}
person.say();
//使用字面量创建对象
var person = {
    name:"snail",
    say:function () {
        console.log(" i am "+this.name);
    }
}
person.say();

var arr = new Array(20);
console.log(arr.length);
var arr = new Array("i","s");
console.log(arr.length);
