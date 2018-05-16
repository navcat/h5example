
class Temp {
	
	funct (){
		console.log('from funct')
	}
}

// 这样是可以的
let t = new Temp()
t.funct()

// 这样却可以
Temp.prototype.funct()


Temp.funct()   // 报错

