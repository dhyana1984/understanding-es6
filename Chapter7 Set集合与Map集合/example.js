//用object当map的常见错误

let map = {}
map[5] = "foo"
console.log(map["5"]) //foo 对象属性键名会被自动转化成字符串

key1 = {}
key2 ={}
map[key1] = "foo"
//因为object的键会被自动转成字符串，所以key1和key2在被用作map的键时都会被转为"object Object"，所以值是一样的
console.log(map[key2]) // foo 

