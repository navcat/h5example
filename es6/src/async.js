// let p1 = new Promise(function(resolve, reject){
// 	setTimeout(() => {
// 		console.log('p1----')
// 		reject(new Error('p1 error'))
// 	}, 3000)
// })

// let p2 = new Promise(function(resolve, reject){
// 	setTimeout( ()=> {
// 		resolve(p1)
// 		console.log('p2..........')
// 	}, 1000)
// })

// p2.then(rest =>{
// 	console.log('resolve ===>' + rest)
// }, rest => {
// 	console.log('reject ==>' + rest)
// }).catch( rest=> {
// 	console.log('error ==>' + rest)
// })


let p3 = new Promise(function(resolve, reject){
	setTimeout( () => {
		// resolve(' p3 resolve')
		reject(' p3 reject')
	}, 2000)
})
p3.then(rest => {
	console.log('p3 resolve 1')
	console.log(rest)
	return rest
}, rest => {
	console.log(rest)
	console.log('p3 reject 1')
	throw new Error('error in p3-1')
	return rest
})
.catch(err =>{
	console.log('error  ' + err)
	return 'false'
})
.then(rest => {
	console.log(rest)
	console.log('p3 resolve 2')
	return rest
}, rest => {
	console.log(rest)
	console.log('p3 reject 2')
	return rest
})
.then(rest => {
	console.log(rest)
	console.log('p3 resolve 3')
	return rest
}, rest => {
	console.log(rest)
	console.log('p3 reject 3')
	return rest
})