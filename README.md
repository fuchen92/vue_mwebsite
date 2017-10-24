# vue_mwebsite

> A Vue.js project

## 说明

**学习 vue 练手用。因为不知道找一个什么东西练手，就拿公司手机网来模仿（公司手机网并没有 vue 版本，也没有用到任何框架，是多页应用，由后台同学和老大控制路由，渲染数据）。这只是一个模仿的练手作，如被告知需要删除会及时删除。**

刚学习，代码写的比较粗糙，应该不会被警告吧。:joy:

项目上渲染出来的都是（mock假数据），首页，列表页，文章页的数据都是复制而来，以及用的图片，都是手机网的图直接拿过来用，不过有些功能是没有完全实现的，比如说加载更多，比如说搜索等功能。这些功能如果真正项目要用和完善的话需要和后台同学配合，列表页的文章列表就是请求假数据的，和后台同学配合的话直接参照请求文章列表修改请求的 url 和传参就好了。

## 目录结构

```
	vue_mwebsite
		build
		config
		mock						// mock 假数据
		screenshots					// 截图
		src							// 源代码
			assets					// 一些用到的图片和样式
			components				// 组件
			router					// 路由
			views					// 视图
			App.vue
			main.js					// 主入口
			test.html				// 不使用flex强制不换行且超出容器能滚动的例子
		static
		.babelrc
		.editorconfig
		.gitignore
		.postcssrc.js
		README.md
		index.html
		package.json
```

## 页面

实现的页面

* 首页
* 频道页
* 列表页
* 文章页（加载更多没实现，实现也比较简单，和后台同学配合请求数据。文章列表渲染就是请求假数据，所以加载更多就懒的写了）
* 关于我们
* 加入我们
* 联系我们
* 侧边栏目录页
* 侧边栏搜索页（搜索功能没实现）

对了，请求数据用的 ajax 库是 Axios，站在前人肩膀上好乘凉啊。

... 和一些公共使用的组件

## 截图

![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/1.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/2.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/4.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/5.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/8.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/9.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/13.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/14.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/10.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/11.png)
![](https://github.com/fuchen92/vue_mwebsite/blob/master/screenshots/12.png)

## 总结

对我这种小白来说 vue-cli 真的难啊，为使用 vue，前后把官网看了几遍，然而一实际开发就是不知从何下手（不知道如何在浏览器中让 `.vue`文件跑起来:cold_sweat:）。附带学习的东西太多了。什么`webpack`，`vue`，`vue-router`，`vuex`，这里没有用到 `vuex`，`vuex`还需要再多看看，争取下次能够应用到项目中。虽然官网上说学习vue不用可以去了解webpack，然而一看到 `cli` 生成的一大坨直接就能把人干懵逼咯。而 `webpack` 真的难（对我这种小白来说的确是的:joy:），网上什么简短教程直接给你贴一个配置出来看的一头雾水，还是老老实实把官方文档看一遍，在试着自己琢磨吧。

总之，磕磕绊绊的把结构码出来，对于 `vue` 的使用和认识总算不那么生疏了，总算有点收获，继续努力


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
