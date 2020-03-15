//Promise里面的完成处理程序和拒绝处理程序总是在执行器完成后被添加到任务队列的末尾
let promise = new Promise(function (resolve, reject) {
    console.log("Promise")
    resolve()
})

promise.then(function () {
    console.log("Resolved!") //被添加到任务队列末尾
})

console.log("Hi") //会在promise.then之前执行

//输出是
//Promise
//Hi
//Resolved!


//node环境未被处理rejection跟踪器
let possiblyUnhandledRejections = new Map()

//如果一个拒绝没被处理，将它添加到map集合
process.on("unhandledRejection",(reason, promise) =>{
    possiblyUnhandledRejections.set(promise,reason)
})

//如果promise被处理了，就从集合删除
process.on("rejectionHandled", (promise) =>{
    possiblyUnhandledRejections.delete(promise)
})

//定期处理被追踪的未被处理的rejection
setInterval(() => {
    possiblyUnhandledRejections.forEach((reason, promise) =>{
        console.log(reason.message ? reason : reason.message)

        //做一些事情处理这些拒绝
        //handleRejection(promise, reasson)
    })
    possiblyUnhandledRejections.clear()
}, 60000);

//浏览器环境中未被处理的rejection跟踪器
//如果一个拒绝没被处理，将它添加到map集合
window.onunhandledrejection = (event) =>{
    possiblyUnhandledRejections.set(event.promise, event.reason)
}

//如果promise被处理了，就从集合删除
window.onrejectionhandled = (event) =>{
    possiblyUnhandledRejections.delete(event.promise, event.reason)
}

//定期处理被追踪的未被处理的rejection
setInterval(() => {
    possiblyUnhandledRejections.forEach((reason, promise) =>{
        console.log(reason.message ? reason : reason.message)

        //做一些事情处理这些拒绝
        //handleRejection(promise, reasson)
    })
    possiblyUnhandledRejections.clear()
}, 60000);