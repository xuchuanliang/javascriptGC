##变量、作用域和内存问题
###javascript中存在基本类型和引用类型，将一个值赋值给变量时，解析器会确定这个值时引用类型还是基本类型值
- 引用类型的值，可以为其添加属性和方法，也可以改变和删除其属性和方法  
- 基本类型复制时值复制，引用类型复制时引用复制  
- js中的函数参数都是按值传递，与Java类似，基本类型是传递值的拷贝，引用类型是传递引用的拷贝  
- 检测基本类型使用typeof，检测对象使用instanceof
###所有引用类型的值都是Object的实例
###ECMA-262规定任何内部实现了[[Call]]方法的对象都应该在使用typeof操作符时返回function
###执行环境
- 执行环境定义了变量或函数有权访问的其他数据，决定了他们各自的行为。每个执行环境都有一个与之关联的变量对象，环境中定义的所有变量和函数都保存在这个对象中<br/>
- 全局执行环境是最外围的一个执行环境，在浏览器中，全局执行环境被认为是window对象，因此所有全局变量和函数都是作为window对象的属性和方法创建的<br/>
- 每个函数都有自己的执行环境，当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行后，栈将其环境弹出，把控制权返回给之前的执行环境，ECMAScript中的执行流由这个机制控制。
- 当代码在一个执行环境中执行，会创建变量对象的一个作用域链。作用域链的用途，是保证对执行环境的有权访问的所有变量和函数的有序访问。作用域链的前端始终是当前执行的代码所在环境的变量对象。
如果这个环境是函数，则将其活动对象作为变量对象。活动对象在最开始时只包含一个变量，即arguments对象。作用域中的下一个变量对象来自于包含环境，而再下一个变量对象来自于下一个包含环境。这样，一直延续到全局执行
环境，全局执行环境的变量对象始终是作用域链中的最后一个对象。
- 标识符解析是沿着作用域链一级一级的搜索标识符的过程。搜索过程始终从作用域链的前端开始，然后逐级的向后回溯，直到找到标识符为止。
###Javascript中没有块级作用域
###管理内存，提高性能，变量不使用是，引用变为null
###执行环境有全局执行环境和函数执行环境之分
###垃圾清理机制：标记清除和引用计数
