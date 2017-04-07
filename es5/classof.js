/**
 * 实现classof
 * 函数
 *
*/

function classOf(o) {
    'use strict';
    if (o === null) {
        return 'Null';
    }
    if (o === undefined) {
        return 'Undefined';
    }
    return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classOf(null));
console.log(classOf(undefined));
console.log(classOf(6));
console.log(classOf([1, 2, 3]));
console.log(classOf("hello"));
console.log(classOf(true));
console.log(classOf(Boolean(false)));