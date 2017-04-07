/**
 * 数组中的方法
*/


/**
 * 测试foreach方法
 * 三个参数：数组元素、索引、数组本身
 */
function testForEach() {
    'use strict';
    var temp = [11, 22, 33, 44, 55];
    // 使用三个参数
    temp.forEach(function (value, index, a) {
        console.log(value);
        console.log(index);
        console.log(a);
        console.log('--------------');
    });

    // 使用两个参数
    temp.forEach(function (value, index) {
        console.log(value);
        console.log(index);
        console.log('--------------');
    });

    // 使用一个参数
    temp.forEach(function (value) {
        console.log(value);
        console.log('--------------');
    });

    /// foreach中不能是用break语句
    // temp.forEach(function (value) {
    //     console.log(value);
    //     console.log('--------------');
    //     if (value > 30) {
    //         break;
    //     }
    // });

    /// foreach 跳出循环正确做法
    temp.forEach(function (value) {
        console.log(value);
        console.log('--------------');
        if (value > 30) {
            throw new Error('StopIteration');
        }
    });
}




/**
 * 测试map函数
 * @return {[type]} [description]
 */
function testMap() {
    'use strict';
    var temp = [11, 22, 33, 44, 55];
    var rest = temp.map(function (x) {
        return x * x;
    });
    console.log(rest);
}
// // 测试foeach
// testForEach();
// 测试map
testMap();