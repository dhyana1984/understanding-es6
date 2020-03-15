//验证给对象添加新属性的值是数字
let target = {
    name = 'target'
}

let proxy = new Proxy(target, {
    //trapTarget就是target, key是属性名，value是属性值，receiver是proxy
    set(trapTarget, key, value, receiver) {
        //忽略被代理对象已有的属性，只作用于新属性
        if (!trapTarget.hasOwnProperty(key)) {
            if (isNaN(value)) {
                throw new TypeError("Type Erro!")
            }
        }

        //如果值是数字执行添加属性
        return Reflect.set(trapTarget, key, value, receiver)
    }
})

proxy.count = 1 //不会把报错
proxy.name = 'aa' //不会报错，因为name是已有的属性
proxy.anotherName = 'bb' //报错，新属性只能是数字

//撤销代理
let target = {
    name: 'target'
}

//revocable方法返回proxy和revoke两个对象
let {proxy, revoke} = Proxy.revocable(target, {})

//在调用revoke方法之前还可以使用proxy对象
console.log(proxy.name) //target

revoke()

//调用revoke方法之后再使用proxy对象会报错
console.log(proxy.name) //报错

