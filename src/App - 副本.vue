<template>
  <div id="app">
    <img src="./assets/11111.jpg">
	<div class="a" style="background-image: url(./assets/logo.png)"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./assets/basic.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a {
	width: 200px;
	height: 200px;
}
</style>
