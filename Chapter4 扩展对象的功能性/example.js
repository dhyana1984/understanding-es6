//Object.assign()方法不能将提供者的访问器属性复制到接受对象中
const receiver = {},
    supplier = {
        get name() {
            return "aaa"
        }
    }
Object.assign(receiver, supplier)

const descriptor = Object.getOwnPropertyDescriptor(receiver, "name")

console.log(descriptor.value) //aaa
//并没有把supplier的访问器属性赋值过来
//仅仅只是将supploer的aaa值存为receiver的name属性的值，所以receiver的name属性的desciptor对象并没有get属性
console.log(descriptor.get)   //undefined


let person = {
    getGreeting(){
        return "Hello"
    }
}

let friend = {
    getGreeting(){
        //return Object.getPrototypeOf(this).getGreeting.call(this)+ ", hi!"
        //等同于
        //super实际上是通过搜索friend.geetGreeting方法的getPrototypeOf([[HomeObject]])
        //然后找到同名方法，然后设置this绑定再调用
        return super.getGreeting() + ", hi" 
        //等同于
        //return person.getGreeting.call(this)
    }
}

//将frend的原型设置为person
Object.setPrototypeOf(friend, person)
console.log(friend.getGreeting()) //Hello, hi!
console.log(Object.getPrototypeOf(friend) === person) //true