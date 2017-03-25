## ES2015 ES6

### 配置
```
"babel": {
    "presets": [
      "es2015"
    ],
    "plugins": []
  }
```

### 安装依赖
$ npm install --save-dev babel-preset-es2015
$ npm install --global babel-cli
$ npm install --save-dev eslint babel-eslint

### 执行es6的转换
方式一：
npm run build
方式二：
babel es6/src -d es6/dest

### 帮助文档
ES6入门：http://es6.ruanyifeng.com/
babel官方网站：https://babeljs.io/
babel中文网：http://babeljs.cn/