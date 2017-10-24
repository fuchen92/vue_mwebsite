<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<router-view name="footer"></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style lang="less">
@import "./assets/basic.less";
#app {
	width: 100%;
	height: 100%;
}
</style>
