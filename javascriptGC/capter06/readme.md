##面向对象的程序设计
- 对象：无序属性的集合，其属性可以包含基本值，对象或者函数
- ECMAScript中有两种属性：<b>数据属性和访问器属性
- 4个描述数据属性的特征：<br/>
[[Configurable]]:表示能否通过delete删除属性从而重新属性，能否修改属性的特性，或者能否把属性修改为访问器属性<br/>
[[Enumerable]]:表示能否通过for-in循环返回属性<br/>
[[Writable]]：表示能否修改属性的值<br/>
[[Value]]：包含这个属性的数据值
- 访问器属性：<br/>
[[Configurable]]:表示能否通过delete删除属性从而重新属性，能否修改属性的特性，或者能否把属性修改为访问器属性<br/>
[[Enumerable]]:表示能否通过for-in循环返回属性<br/>
[[get]]:在读取属性时调用的函数<br/>
[[set]]:在写入属性时调用的函数
- Object.defineProperties():可以通过描述符给对象一次性定义多个属性
- 读取属性的特性：Object.getOwnPropertyDescriptor()
###创建对象
- 工厂模式创建对象
- 构造函数模式<br/>
构造函数相对于工程模式有以下区别：
1.没有显示的创建对象；
2.直接将属性和方法复制给this对象；
3.没有return语句<br/>
创建一个对象使用new关键字，构造函数会经历以下四个步骤：<br/>
1.创建一个新对象；
2.将构造函数的作用域赋值给新对象（因此this指向了这个新对象）
3.执行构造函数中的代码（为新对象增加属性或方法）
4.返回新对象
- 对象都有一个constructor（构造函数）属性
- 构造函数与其他函数的区别：<br/>
构造函数与其他函数的唯一区别，就在于调用他们的方式不同。构造函数仍然是函数，不存在定义构造函数的特殊语法。任何函数，只要通过new
操作符来调用，那他跟普通函数也不会有什么两样。
###原型模式
- 创建的每个函数都有一个prototype属性，这个属性是一个指针，指向一个对象，而这个对象的用途时包含可以由特定类型的所有实例共享的属性和方法。prototype(原型)属性中的属性和方法
是由所有实例共享的
- 无论是什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向了函数的原型对象。默认情况下，
所有原型对象都会自动获得一个constructor属性，这个属性包含一个指向prototype属性所在函数的指针。如Person.prototype.constructor指向了Person
如：console.log(Person===Person.prototype.constructor);//true
- 每当代码读取到某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性。搜索首先从对象的实力本身开始。如果在实例中 
找到了具有给定名字的属性，则返回该属性的值；如果没有找到，则继续搜索指针指向的原型对象，如果在原型对象中找到了，则返回该属性的值，否则搜索解决。
- in操作符
- 注意以下代码<br/>
此种方法相当于在Person最初的原型对象中增加属性和方法：
function Person(){}
Person.prototype.name = "snail";
Person.prototype.age = 24;
Person.prototype.say = function(){console.log(this.name);};<br/>
此种方法相当于给Person的原型对象更换为一个新的原型对象，会导致constructor方法没有被覆盖，如果必要，则需要重新覆盖构造方法<br/>
Person.prototype = {
    name : "snail",
    age:24,
    say:function(){
        console.log(this.name);
    },
    constructor:Person
}
- 原型对象的缺点:1.省略了为构造函数传递初始化参数，结果所有的实例在默认情况下都将取得相同的属性值
2.原型对象中的所有属性和方法都是被所有实例共享的，这个特点对引用类型变量影响比较严重
