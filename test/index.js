var Mock = require('mockjs');
var data = Mock.mock({
	// 属性list的值是一个数组，其中含有1-10个元素
	'list|0-10': [{
		// 属性ID是一个自增数，起始值为1，每次增加1
		'id|+1': 1
	}]
})
console.log(JSON.stringify(data, null, 4))