
/**
 * 实现字符串的反转
 * @param  str 字符串
 */
function reverse(str){

	var temp = "";
	for(var i = str.length - 1; i >= 0; i--){
		temp += str[i];
	}
	return temp
}

var rest = reverse("hello")
console.log(rest)



function reverse2(str){
	var temp = "";
	for(var i = str.length - 1; i >= 0; i--){
		temp += str.charAt(i);
	}
	return temp
}

rest = reverse2('world')
console.log(rest)