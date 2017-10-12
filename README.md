相关资料
=
[react-redux-tutorial](https://github.com/lewis617/react-redux-tutorial)<br/>
[Redux 中文文档](http://cn.redux.js.org/)<br/>
<br/>
[ECMAScript 语法](http://www.w3school.com.cn/js/pro_js_syntax.asp)<br/>
[ECMAScript 6 入门](http://es6.ruanyifeng.com/)<br/>
[30分钟掌握ES6/ES2015核心内容](http://www.jianshu.com/p/ebfeb687eb70)<br/>
<br/>
[学习Javascript闭包](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)<br/>
[JavaScript 验证 API](http://www.runoob.com/js/js-validation-api.html)<br/>
<br/>
[Webpack 入门教程](http://www.runoob.com/w3cnote/webpack-tutorial.html)<br/>
[入门Webpack](http://www.jianshu.com/p/42e11515c10f)<br/>
<br/>
[Express - 基于 Node.js 平台的 web 应用开发框架](http://www.expressjs.com.cn/)<br/>
<br/>
[SVG图标素材下载](http://www.iconsvg.com/)<br/>
[15个关于Chrome的开发必备小技巧](http://www.cnblogs.com/giggle/p/5966991.html)<br/>

浏览器兼容性
=
E11不兼容yyyy-MM-dd HH:mm:ss格式的时间（转换为yyyy/MM/dd HH:mm:ss）<br/>
IE8不兼容原生trim()（使用$.trim()）<br/>
IE兼容event.srcElement，火狐兼容event.target
```javascript
var obj = event.srcElement ? event.srcElement : event.target; 
```

细节点
=
AngularJS（img使用ng-src代替src，防止报错资源找不到）<br/>
toString()和String()（null和undefined只能使用String()，使用toString()会报错）<br/>
slice()和substring()（对于负数参数，slice()方法会用字符串的长度加上参数，substring()方法则将其作为0处理，其它情况相同）<br/>
基本类型变量复制：值复制，两个值互相不影响<br/>
引用类型变量复制：引用复制，两个引用指向同一个对象<br/>
ES5只有全局作用域和函数作用域，没有块级作用域，而let则实际上为JavaScript新增了块级作用域 <br/>
匿名函数的this指向window
```javascript
var f = function () {  
    alert(this === window);  
};  
f(); //window  
var f = function () {  
    return function () {  
        alert(this === window);  
    }  
};  
f()(); //window  
obejct = {  
    f: function () {  
        alert(this === obejct);  
    }  
}  
obejct.f(); //obejct  
obejct = {  
    f: function () {  
        return function () {  
            alert(this === window);  
        }  
    }  
}  
obejct.f()(); //window  
```
NaN（建议使用isNaN()）
```javascript
var v = NaN;  
alert(v == NaN); //false  
alert(NaN == NaN); //false  
alert(isNaN(v)); //true  
```
typeof（返回的是字符串，注意null）
```javascript
typeof "John"                 // 返回 string   
typeof 3.14                   // 返回 number  
typeof NaN                    // 返回 number  
typeof false                  // 返回 boolean  
typeof [1,2,3,4]              // 返回 object  
typeof {name:'John', age:34}  // 返回 object  
typeof new Date()             // 返回 object  
typeof function () {}         // 返回 function  
typeof undefined              // 返回 undefined  
typeof myCar                  // 返回 undefined (如果 myCar 没有声明)  
typeof null                   // 返回 object  
if(typeof variable == 'object' && variable){    
    //确保variable不为null    
}
```
==和===
```javascript
alert(10 == '10') //true（值）  
alert(10 === '10') //false（值和类型）  
switch //使用===  
alert(null === undefined) //false  
alert(null == undefined) //true 
```
undefined
```javascript
//v未声明  
alert(typeof v) //undefined  
alert(typeof v == 'undefined') //true  
alert(typeof v == undefined) //false  
alert(v == undefined) //报错  
  
//var v;声明未初始化  
//var v = undefined;  
alert(typeof v) //undefined  
alert(typeof v == 'undefined') //true  
alert(typeof v == undefined) //false  
alert(v == undefined) //true 
```
