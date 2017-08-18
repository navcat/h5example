/**
 * 变量的结构赋值
 */
////// 数组的结构赋值
var [a, b, c] = [1, 2, 3]
// console.log(a);      // 1
// console.log(b);      // 2
// console.log(c);      // 3

let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo);       // 1
// console.log(bar);       // 2
// console.log(baz);       // 3

let [x, ,y] = [1, 2, 3];
// console.log(x);       // 1
// console.log(y);       // 3

let [head, ...tail] = [1, 2, 3, 4];
// console.log(head);  // 1
// console.log(tail);  // [2, 3, 4]

/// 如果结构不成功，变量的值就等于undefined
let[m, n, ...mm] = ['a'];
// console.log(m);     // 'a'
// console.log(n);     // undefined
// console.log(mm);    // []


/// 不完全解构
let [x1, y1] = [1, 2, 3]
// console.log(x1);    // 1
// console.log(y1);    // 2

/// Set的解构
let [a1, b1, c1] = new Set(['a', 'b', 'c']);
// console.log(a1);        // a
// console.log(b1);        // b
// console.log(c1);        // c

console.log('------------1-------')
