<template>
	<div class="main">
		<!-- <slider></slider> -->
		<banner></banner>
		<news-category :newsCategory="newsCategory"></news-category>
	</div>
</template>

<script>
import banner from "@/components/banner.vue";
// import slider from "@/components/slider.vue";
import newsCategory from "@/components/news-category.vue";
export default {
	name: "list-default",
	data () {
		return {
			newsCategory: {
				link: "",
				type: "编辑推荐",
				moretext: "更多>>"
			}
		}
	},
	components: {
		// "slider": slider
		"banner": banner,
		"news-category": newsCategory
	}
}
</script>

<style lang="less">
.main {
	overflow: hidden;
}
</style>

