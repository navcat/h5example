$(function(){
	var Menu = {
		/**
		 * 初始化函数，对外暴露的接口
		 */
		init: function(){
			this.render();
			this.bind();
		},
		/**
		 * 查询HTML元素，保存至对象
		 */
		render : function(){
			this.btn = $("#btn");			// 点击按钮
			this.content = $("#content");	// 显示内容

		},
		/**
		 * 绑定事件
		 */
		bind: function(){
			// 绑定点击显示事件
			this.bindShow();
		},
		/**
		 * 点击按钮，显示菜单
		 */
		bindShow: function(){
			var self = this;
			self.btn.on('click', function(){
				self.content.show();
			})
		},
		/**
		 * 加载数据接口
		 * @param  {[type]}   params   [description]
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		bindLoadData: function(params, callback){
			$.get('url', params, function(res){
				if(callback){
					callback()
				}

			})
		}

	};
	Menu.init(); 	// 初始化调用
});