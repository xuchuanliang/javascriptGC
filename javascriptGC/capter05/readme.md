##引用类型
###引用类型类似于Java中类的概念，对象是引用类型的实例
###Object类型
###Array类型
数组方法：
- 栈：push(),pop()；
- 队列：shift(),push();
- 排序：reverse(),sort();
- 操作方法:concat()、slice()、splice();
- 位置方法：indexOf()、lastIndexOf();
- 迭代方法：every()、filter()、forEach()、map()、some();
- 缩小方法：reduce()、reduceRight()
###Date类型
- 方法：parse()
- 日期格式化：toDateString()、toTimeString()、toLocalDateString()、toLocalTimeString()、toUTCString()、getxxx();
###正则表达式 RegExp
var express = /pattern/flags;
其中pattern是正则表达式，flags标识正则表达式的行为：g表示全局模式；i表示不区分大小写；m表示多行模式
###Function类型
- 每个函数都是Function类型的实例，而且都与其他引用类型一样具有属性和方法。由于函数是对象，因此函数名实际上
也是一个指向函数对象的指针，不会与某个函数绑定。函数通常是使用函数声明语法定义的。
###函数声明和函数表达式
- 函数声明：function sum(){}<br/>
- 函数表达式：var sum = function(){};<br/>
- 解析器在向执行环境中加载数据时，会率先读取函数声明，并使其在执行任何代码之前可用；至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正的被解释执行。
- 要访问函数的指针而不执行函数的话，必须去掉函数名后面的那对圆括号
###函数内部属性
- 在函数内部，有两个特殊的对象：arguments和this
- arguments是一个类数组的对象，包含着传入函数中的所有参数，arguments有个属性叫做callee属性，该属性是一个指针，指向拥有这个arguments对象的函数。
- this引用的是函数据以执行的环境对象
- 函数的名字只是一个包含指针的变量而已
- caller:函数的一个属性，保存着调用当前函数的函数的引用
###函数的属性和方法
- length属性：表示函数希望接受的命名参数的个数
- prototype属性：保存引用类型的所有实例方法
- apply()方法：
- call()方法：