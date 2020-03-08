let node = {
    type: 'aa',
    name: 'bb'
},
    type = 'cc',
    name = 'dd'

        //使用解构语法为多个变量赋值，注意加小括号,否则花括号会被视为代码块
        ({ type, name } = node)

function outputInfo(value) {
    console.log(value === node)
}

//直接传结构表达式，由于js表达式的值为右边的值，所以传入参数等于是node，而type和name也被赋值了
outputInfo({ type, name } = node) //true

//解构赋值时使用默认值
let { value = true } = node
console.log(value) //true

//修改属性名，实际上是读取type属性并将其存储在localType中，也可以加默认值
let { type: localType, name: localName = 'bar' } = node
console.log(localType) //aa
console.log(localName) //bb

//数组解构，只想取数组中第3个值，则不需要提供第一个和第二个元素的变量名称
let colors = ["red", "green", "blue"]
let [, , thirdColor] = colors //前两个直接用空位
console.log(thirdColor) //"blue"

//交换变量
let a = 1, b = 2
[a, b] = [b, a]
console.log(a) //2
console.log(b) //1

//可以砸数组解构赋值表达式中维数组的任意位置添加默认值
let array = [1]
let [first, second = 2]
console.log(second) //2

//克隆数组
let myArray = [1, 2, 3, 4, 5]
let [...cloneMyArray] = myArray
console.log(cloneMyArray) //[1,2,3,4,5]

//等同于

let cloneMyArray2 = myArray.concat()

//解构参数如果不传入函数会报错
function setCookie(name, value, { secure, path, domain, expires }) {
    //...
}

//不会报错
setCookie("type", "js", {
    secure: true,
    expires: 60000
})

//报错
setCookie("type", "js")

//调用setCookie时，JavaScript引擎实际上做了这些事情
function setCookie(name, value, options) {
    //如果表达式右边为null，则会报错，所以解构参数不能不传入
    let { seure, path, domain, expires } = options
    //...
}

//使用默认参数可以解决这个问题，secure, path, domain, expires的值都是undefined
function setCookie(name, value, { secure, path, domain, expires } = {}) {
    //...
}

//为解构参数每一个参数设置默认值
const setCookieDefaults = {
    secure: false,
    path: '/',
    domain: 'example.com',
    expires: new Date()
}

//即使解构参数不传，也不会报错并且使用默认值
function setCookie(name, value,
    {
        secure = setCookieDefaults.secure,
        path = setCookieDefaults.path,
        domain = setCookieDefaults.domain,
        expires = setCookieDefaults.expires
    } = setCookieDefaults) {
    //...
}











