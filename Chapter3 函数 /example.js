
function foo(url, timeout = 2000, callback) {
    //...
}

//只有以下情况调用foo才会使用timeout的默认值
//1.传入undefined给timeout
foo('/get', undefined, (param)=>{
    //callback
})
//2.不传值
foo('/get')

//传入null的话不会使用timeout默认值
foo('/get', null, function (params) {
    //callback
})

//限定Math.max()返回的最小值是0
const value = [-1,-2,-3,-4,-5]
Math.max(...value, 0) //不会返回负数

//箭头函数的立即执行函数
let person = ((name) =>{
    return {
        getName: function () {
            return name
        }
    }
})("Tom")

console.log(person.getName()) // Tom