##基本概念
严格模式：在顶部添加 use strict
ECMAScript语句以分号结尾
##数据类型
Undefined,Null,Boolean,Number,String,Object
Object本质上是由一组无序的键值对组成
typeof null 会返回一个object,javascript会认为null是一个空指针，也就是空对象
##将非数值转换成数值
1.Number()
2.parseInt();
3.parseFloat()
##转换字符串
toString()
##Object类型
对象是一组数据和功能的集合。
###重点：在ECMAScript中，Object类型是所有他的实例的基础，也就是Object类型所具有的任何属性和方法也同样存在于更具体的对象中。
Object的每个实例都具有一下下列属性和方法：
- Construct:保存着用于创建当前对象的函数。
- hasOwnProperty(propertyName):用于检查给定的属性在当前对象实例中（而不是在实例原型中）是否存在，参数名必须以字符串形式指定  
- isPrototypeOf(object):用于检查传入的对象是不是另一个对象的原型  
- propertyIsEnumerable(propertyName):用于检查给定的属性能否使用for-in语句来枚举，参数名必须以字符串形式指定  
- toLocalString:返回对象的字符串表示，与执行环境地区对应
- toString():返回对象的字符串标识
- valueOf():返回对象的字符串、数值或布尔值表示
###ECMAScript中没有块级作用域，循环语句，条件语句等代码块中的变量可以被外界访问到
##函数
function functionName(arg1,arg2){  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements  
}  
ECMAScript函数不关心函数中的形参个数有多少个，最终都会放入一个arguments对象中，这个对象类似于数组，参数可以直接从arguments对象中取，如arguments[i]
函数传入了多少参数，可以通过arguments.length来查看<br/>
在ECMAScript中，命名的参数只提供便利，但不是必须的。
###由于ECMAScript中函数形参都是以arguments对象表示，所以没有函数重载的概念，相同名称的函数，均已后定义的为准