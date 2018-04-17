
/**
 * 自定义Promise
 */
function MyPromise(fn) {
	var callbacks = [];

	this.then = function(func) {
		callbacks.push(func)
		return this
	}

	function resolve(value){
		callbacks.forEach( function(callback) {
			callback(value);
		})
	}

	fn(resolve);
}



function getUserId() {
	return new MyPromise(function(resolve) {
		console.log("开始获取到用户ID...")
		// 异步获取用户ID
		setTimeout(function() {
			console.log("已经获取到用户ID...")
			resolve(666)
		}, 2000)
	})
}


getUserId().then(function(id){
	console.log('then....1..' + id)
}).then(function(id) {
	console.log('then....2..' + id)
})
