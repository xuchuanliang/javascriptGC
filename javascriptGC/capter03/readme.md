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