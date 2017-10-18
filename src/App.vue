<template>
	<div id="app">
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appFooter from "@/components/app-footer.vue";
export default {
	name: 'app',
	components: {
		"app-footer": appFooter
	}
}
</script>

<style lang="less">
@import "./assets/basic.less";
#app {
	width: 100%;
	height: 100%;
}
</style>
