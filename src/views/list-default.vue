<template>
	<div class="main">
		<!-- <slider></slider> -->
		<banner></banner>
	</div>
</template>

<script>
import banner from "@/components/banner.vue";
// import slider from "@/components/slider.vue";
export default {
	name: "list-default",
	components: {
		// "slider": slider
		"banner": banner
	}
}
</script>

<style lang="less">
.main {
	overflow: hidden;
}
</style>

