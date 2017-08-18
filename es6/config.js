let fs = require('fs');

// 判断是否有文件
let path = 'C:/Users/Administrator/Desktop/h5example/es6/token3.json';
// 从接口里面取回的数据

// 判断是否存在
if (fs.existsSync(path)){
// if (true){
	// 读取文件内容
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) throw err;
		data = JSON.parse(data);
  		console.log(data.token);
	})
}else{
	// 文件不存在，创建内容
	fs.writeFile(path, JSON.stringify(data), (err) => {
	  if (err) throw err;
	  console.log('The file has been saved!');
	});
}

var TokenObj = {
	path,
	getConfig(){
		fs.readFile(this.path, 'utf8', (err, data) => {
			if (err){
				// 
			};
			data = JSON.parse(data);
	  		console.log(data.token);
	  		// 判断是否过期
	  		let now = Date();
	  		if(now.getTime() - new Date(data.expire) > 7000){
	  			// 去取数据
	  			this

	  		}
	  		return data;
		}

	},
	fetchData(){
		// 从接口里面去取数据
		return [token, expire]
	}
	,
	setConfig(token, expire){
		let data = {
			"token": token,
			"expire": expire
		}
		// 判断是否存在
		if (fs.existsSync(path)){
		// if (true){
			// 读取文件内容
			fs.readFile(path, 'utf8', (err, data) => {
				if (err) throw err;
				data = JSON.parse(data);
		  		console.log(data.token);
			})
		}else{
			// 文件不存在，创建内容
			fs.writeFile(path, JSON.stringify(data), (err) => {
			  if (err) throw err;
			  console.log('The file has been saved!');
			});
		}
	}
}