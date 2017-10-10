<template>
	<div class="news-list-category">
		<h3 class="news-category-title lt">
			<a :href="newsCategory.link">{{ newsCategory.type }}</a>
		</h3>
		<p class="more-news rt" v-if="newsCategory.moretext">
			<a :href="newsCategory.link">{{ newsCategory.moretext }}</a>
		</p>
	</div>
</template>

<script>
export default {
	name: "news-category",
	props: ["newsCategory"]
}
</script>

<style lang="less">
.news-list-category {
	overflow: hidden;
	margin-bottom: 15px;
}
.news-category-title > a, .more-news > a {
	color: #333333;
}
.news-category-title {
	font-size: 16px;
}
.more-news {
	font-size: 14px;
}
</style>


