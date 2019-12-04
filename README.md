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
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-router-dom": "^5.1.2",
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



##下面是全部安装语法：  
npm i nrm -g 全局安装nrm 包  
使用cnpm的获取镜像  
输入以下命令  
npm install -g cnpm --registry=https://registry.npm.taobao.org  
输入cnpm -v输入是否正常  
修改npm的资源镜像链接  
npm config set registry http://registry.npm.taobao.org  
  
cnpm install nrm -g  
使用nrm工具切换淘宝源    
npx nrm use taobao  
如果之后需要切换回官方源可使用   
npx nrm use npm  
安装yarn和react-native-cli  
npm install -g yarn react-native-cli  
设置yarn镜像地址：    
yarn config set registry https://registry.npm.taobao.org --global  
yarn config set disturl https://npm.taobao.org/dist --global  
  
在项目中：npm init -y  初始化npm管理  (建议使用yarn安装包)    
cnpm install webpack -g  全局安装  
cnpm install webpack --save-dev   安装到项目中  
cnpm install webpack-cli  -g  
cnpm install webpack-cli --save-dev  
cnpm install webpack-dev-server -D  
cnpm i jquery -s  
cnpm i html-webpack-plugin -D   
cnpm install style-loader css-loader -D  
cnpm install less -D  
cnpm install less-loader -D  
cnpm install sass -D  
cnpm install sass-loader -D  
cnpm install popper -s  
cnpm install bootstrap -s  
cnpm install @babel/core -D  
cnpm install babel-loader -D  
cnpm install @babel/plugin-transform-runtime -D  
cnpm install @babel/preset-env -D  
cnpm install @babel/preset-react -D  
cnpm install @babel/preset-stage-0 -D  
cnpm install babel-preset-mobx -D  
cnpm install mini-css-extract-plugin -D  
cnpm install optimize-css-assets-webpack-plugin -D  
cnpm install clean-webpack-plugin -D    
cnpm install uglifyjs-webpack-plugin -D    
cnpm i react react-dom -S  
cnpm install -g yarn react-native-cli  
cnpm i -D @babel/plugin-proposal-class-properties  
cnpm i @babel/runtime -D  
cnpm install prop-types -D  
cnpm install --save react-router-dom  
cnpm install antd --save  
cnpm install babel-plugin-import --save-dev  
cnpm install fetch-jsonp -S

## 2019/12/2 新加入vue和react通用版本，见react-and-vue分支        
cnpm install vue -S  
cnpm i vue-loader vue-template-compiler -D  
cnpm i vue-loader-plugin -S  
cnpm i vue-resource -D  
cnpm install mint-ui -S  
cnpm install babel-plugin-component -D  
cnpm install vuex -S 

## 2019/12/4 若想使用Mui的js文件  
1、若想使用Mui的js，注意在babel的options里面加入：sourceType:"unambiguous"   
2、如果用vue需要在webpack中手动删除less的模块化，因为已经有scoped属性  
3、生产版本public在打包的时候如果组件里的lang用的less，也需要对less的样式进行抽离  
{test:/\.less$/,use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']},  




具体安装流程可以参考我的两篇博客:  
  
[开发模式](http://www.kongxiangbo.com/?p=1753)  
[生产模式](http://www.kongxiangbo.com/?p=1850)
