
let f = () => {
	console.log(this)
}

f()

global.a = 1
console.log(global.a)
console.log(this.a)

console.log('------------------')
console.log(this)
// console.log(this === window)   // true
// console.log(global)
// console.log(this == global)  // false