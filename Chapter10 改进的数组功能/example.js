// Array.from 映射转换
const translate = () => {
    //Array.from的第二个参数就是映射转换的函数
    return Array.from(arguments, (value) => value + 1)
}

let numbers = translate(1, 2, 3)
console.log(numbers) // 2,3,4

//Array.from 第三个参数表示映射函数的this值
let helper = {
    diff: 2,
    add(value) {
        return value + this.diff
    }
}

const translatePlus = () => {
    //第三个参数绑定第二个参数映射函数的this
    return Array.from(arguments, helper.add, helper)
}
numbers = translatePlus(1, 2, 3)
console.log(numbers) //3, 4, 5

//给numbers填充0，从索引1开始，但是不包含索引3及以后的索引
numbers = [1, 2, 3, 4]
numbers.fill(0, 1, 3)
console.log(numbers) // 1,0,0,4