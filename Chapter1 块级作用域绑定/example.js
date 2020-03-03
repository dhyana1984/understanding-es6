//提升机制 Hoisting
function getValue(condition) {
    if(condition){
        var value = "blue"
        //...
        return value
    }else{
        //此处可访问value变量，值是undefined
        return null
    }
    //此处可访问value,值是undefined
}

//实际上在预编译阶段，JavaScript引擎会将上面的getValue函数修改成下面这样，这就是变量提升
function getValue(condition) {
    var value
    if(condition){
        var value = "blue"
        //...
        return value
    }else{
        return null
    }
}

//内部代码块定义外部相同的变量，会遮蔽外部变量
var count = 30 
if(condition){
    let count = 40 //不会出错，但是会遮蔽外部的count
    //...
}

//在浏览器环境中var被用于全局作用域时，它会创造一个新的全局变量作为全局对象，即window的对象
//这意味着用var很可能会无意覆盖一个已经存在的全局属性
var RegExp = "aaa"
console.log(window.RegExp) // aaa  RegExp被覆盖

var ncz = "bbb"
console.log(window.ncz) // bbb  ncz被覆盖

//在全局作用域使用let或者const，会在全局作用域下创建一个新的绑定
//但是该绑定不会添加为全局对象的属性，let和const不会覆盖全局变量，但是能遮蔽全局变量
let RegExp = "aaa"
console.log(RegExp) //aaa  遮蔽了原来的全局RegExp
console.log(window.external === RegExp) // false  但是let定义的RegExp并不等于原来的全局RegExp