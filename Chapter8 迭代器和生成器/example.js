//生成器函数表达式, 用小括号把参数括起来，并且加星号
//不能用箭头函数来创建生成器
let createIterator = function* (item) {
    for (let i = 0; i < item.length; i++) {
        yield item[i]
    }
}
//在对象中定义生成器
let o = {
    createIterator: function* (params) {
        for (let i = 0; i < params.length; i++) {
            yield params[i]
        }
    },
    //简写
    * anotherCreateIterator(params) {
        for (let i = 0; i < params.length; i++) {
            yield params[i]
        }
    }
}

//给对象的Symbol.iterator属性添加一个生成器，可以将其变为可迭代对象
let collection = {
    items:[],
    *[Symbol.iterator](){
        for (const item of this.items) {
            yield item
        }
    }
}

collection.items = [1,2,3]

for (const x of collection) {
    console.log(x) // 1 2 3
}