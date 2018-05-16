// 闭包方案解决
// 实现间隔1秒输出数字

// 闭包
const func1 = () => {
    for (var i = 0; i < 5; i++) {
        (function(i) {
            setTimeout(function() {
                console.log(i)
            }, 1000 * i)
        })(i);
    }
}


const func2 = () => {
   // 用promise实现， 每隔1秒钟实现
    var tasks = []
    for (var i = 0; i < 5; i++) {
        (function(i) {
            tasks.push(new Promise(resolve => {
                setTimeout(() => {
                    console.log(i)
                    resolve()
                }, 1000 * i)
            }))
        })(i);
    }
    Promise.all(tasks).then() 
}


// 使用生成器实现
// const func3 = () => {
//     for (var i = 0; i < 5; i++) {
//         yield i
//         console.log(i)
//     }
// }


func1()
func2()
// func3()
