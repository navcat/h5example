
const isAppOpen = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('isAppOpen ....')
			resolve(true)
		}, 2000)
	})
}

const getVersion = () => {
	return isAppOpen().then(rest => {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log('getVersion.....')
				resolve('666666')
			}, 2000)
		})
	})
}

getVersion().then(rest=>{
	console.log('version:', rest)
})