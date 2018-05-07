// var person={}
// Object.defineProperty(person,"name",{
//     configurable:false,
//     writable:false,
//     value:"snail"
// })
// console.log(person.name);//snail
// person.name = "isnail";
// delete person.name;//无法删除，因为configurable：false
// console.log(person.name);//snail

//工厂模式
// function createPerson(name,age,job){
//     var p = new Object();
//     p.name = name;
//     p.age = age;
//     p.job = job;
//     p.sayHello = function(){
//         console.log(this.name);
//     }
//     return p;
// }
// var snail = createPerson("snail",24,"it");
// snail.sayHello();

//构造函数模式
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHello = function(){
        console.log(this.name+this.age+this.job);
    }
}
var snail = new Person("snail",24,"it");
var xuchuanliang = new Person("xuchuanliang",24,"coding");
xuchuanliang.sayHello();
snail.sayHello();
console.log(snail.constructor);
console.log(xuchuanliang.constructor);
console.log(snail.constructor===xuchuanliang.constructor)
