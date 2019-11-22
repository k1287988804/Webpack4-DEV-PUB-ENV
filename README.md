# Webpack4-DEV-PUB-ENV两套环境
Webpack4 + developer and producer environments

webpack4版本踩坑之后自己搭建的一套开发者配置和一套生产者配置：
首先，文档目录结构如下：  

![M7JWX8.png](https://s2.ax1x.com/2019/11/22/M7JWX8.png)  

下面是node_modules我安装的插件：

```html
    "@babel/core": "^7.7.2",
    "@babel/plugin-proposal-class-properties": "^7.7.0",
    "@babel/plugin-transform-runtime": "^7.6.2",
    "@babel/preset-env": "^7.7.1",
    "@babel/preset-react": "^7.7.0",
    "@babel/preset-stage-0": "^7.0.0",
    "@babel/runtime": "^7.7.2",
    "babel-loader": "^8.0.6",
    "babel-preset-mobx": "^2.0.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.10.3",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.8.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "prop-types": "^15.7.2",
    "sass": "^1.23.7",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.0.0",
    "terser-webpack-plugin": "^2.2.1",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "url-loader": "^2.2.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
```  

## 2019/11/22修正了配置文件，发现不需要babelrc.json文件  
另外新安装了包：@babel/plugin-proposal-class-properties  @babel/runtime  prop-types




具体安装流程可以参考我的两篇博客:  
[开发模式](http://www.kongxiangbo.com/?p=1753)  
[生产模式](http://www.kongxiangbo.com/?p=1850)
