//单例

let person = new class {

    constructor(name) {
        this.name = name
    }

    sayName() {
        console.log(this.name)
    }
}("Tom")

person.sayName() // Tom

//定义一个集合类
class Collection {
    constructor() {
        this.items = []
    }
    *[Symbol.iterator]() {
        yield *this.items.values()
    }
}

const collection = new Collection()
collection.items.push(1)
collection.items.push(2)
collection.items.push(3)

for (const x of collection) {
    console.log(x)
}
//1
//2
//3
