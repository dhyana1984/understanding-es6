//在对字符串数组比较和排序前，要先将它们标准化为同一种形式，这时Uicode标准化常见问题
const values = ['a', 'b', 'c']
let normalized = values.map(char => {
    return char.normalize() //normalize参数可以用NFC, NFD, NFKC，NFKD，默认是NFC
})

//将value作为副本赋值给normalized再排序
normalized.sort((first, second) => {
    if (first < second) {
        return -1
    } else if (first === second) {
        return 0
    } else {
        return 1
    }
})

//直接对values排序
values.sort((first, second) => {
    let firstNormalized = first.normalize(), secondNormalized = second.normalize()
    if (firstNormalized < secondNormalized) {
        return -1
    } else if (firstNormalized === secondNormalized) {
        return 0
    } else {
        return 1
    }
})

//在格式化工具中，利用repeat函数创建缩进
//缩进指定数量的空格
let indent = " ".repeat(4), indentLevel = 0 //indent创建4个空格字符串,indentLevel用来跟踪缩进等级
//当需要增加缩进时
let newIndent = indent.repeat(++indentLevel)

//通过适当的缩进来对齐文本
let html = `
<div>
    <h1>Title</h1>
</div>`.trim()