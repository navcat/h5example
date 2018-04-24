
/**
 * Vue实体类
 * https://mp.weixin.qq.com/s/CYAo5R_3sOpL2qhHBh8KPQ
 */
class MyVue {
	constructor(options){
		this.options = options
		this.el = document.querySelector(options.el)
		this.data = options.data
		this.methods = options.methods

		// 保存着model与view的映射关系，也就是我们前面定义的Watcher的实例。当model改变时，我们会触发其中的指令类更新，保证view也能实时更新
		this._bindings = {}

		this._observe(this.data)
	}

	/**
	 */
	_observe(data) {
		let val;
		for (let k in data) {
			val = data[k]
			if (Object.hasOwnProperty(k)) {
				// 按照前面的数据，_binding = {number: _directives: []}  
				let bindings = {
					_directives: []
				}
				this._bindings[key] = bindings
				Object.defineProperty(this.data, key, {
					enumerable: true,
					configurable: true,
					get () {
						console.log('Get ==> ${val}')
						return val
					},
					set (newVal) {
						console.log('Set ==> ${newVal}')
						if(val != newVal) {
							val = newVal
							// 当number改变时，触发_binding[number]._directives 中的绑定的Watcher类的更新
							bindings._directives.forEach(item => item._update())
						}
					}
				})
			}
		}
	}
	_compile (root) {
		let nodes = root.children
		let node
		for (let i = 0; i < nodes.length; i++) {
			node = nodes[i]
			// 循环处理所有节点
			if (node.children.length > 0) {
				this._compile(node)
			}

			// 绑定click事件
			if (node.hasAttribute('v-click')) {
				node.onclick = () => {
					let method = node.getAttribute('v-click')
					return this.methods[method].bind(this.data)
				}
			}
			// 实现双向绑定
			if (node.hasAttribute('v-model') && node.tagName === 'INPUT') {
				node.addEventListener('input', key => {
					let model = node.getAttribute('v-model')
					this._bindings[model]._directives.push(new Watcher(
						'input',
						node,
						this,
						model,
						'value'
					))

					
				})
			}
		}
	}
}

class Watcher{
	constructor(name, el, vm, exp, attr){
		this.name = name			// 指令名称，如text
		this.el = el				// 对应的dom元素
		this.vm = vm				// myvue实例
		this.exp = exp				// 指令对应的值
		this.attr = attr			// 指令的属性值
		
		this._update()
	}
	_update () {
		this.el[this.attr] = this.vm.data[this.exp]
	}
}