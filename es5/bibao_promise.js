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
function* func3(){
    for (var i = 0; i < 5; i++) {
        yield i
        console.log(i)
    }
}

const func4 = () => {
    // 模拟其他语言中的 sleep，实际上可以是任何异步操作
    const sleep = (timeountMS) => new Promise((resolve) => {
        setTimeout(resolve, timeountMS);
    });

    (async () => {  // 声明即执行的 async 函数表达式
        for (var i = 0; i < 5; i++) {
            await sleep(1000);
            console.log(new Date, i);
        }

        await sleep(1000);
        console.log(new Date, i);
    })();
}



func1()
func2()
// func3()
