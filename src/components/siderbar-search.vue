<template>
	<div class="siderbar siderbar-search" :class="{ 'siderbar-search-active' : isShowSearch }">
		<div class="container">
			<div class="search-bar">
                <div class="search-arrow lt" @click="hideSearch"></div>
                <div class="search-btn rt">搜索</div>
                <div class="search-input-container">
                    <input type="text" class="search-input" id="searchInput" placeholder="请输入关键字（搜索功能未实现）">
                </div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
	name: "siderbar-search",
	props: {
		isShowSearch: {
			required: true,
			type: Boolean
		}
	},
	methods: {
		hideSearch () {
			this.$emit("hideSearch");
		}
	}
}
</script>

<style lang="less">
@import "../assets/variable.less";
.siderbar-search {
	left: 100%;
}
.siderbar-search-active {
	left: 0;
}
.search-bar {
	position: absolute;
	top: 30px;
	width: 90%;
	height: 30px;
	overflow: hidden;
}
.search-arrow {
    width: 15px;
    height: 20px;
    margin-top: 5px;
	background: url('../assets/search-arrow.png') no-repeat;
    background-size: contain;
}
.search-btn {
    height: 30px;
	line-height: 30px;
	font-size: 14px;
    color: @init-color;
}
.search-input-container, .search-input {
	height: 30px;
}
.search-input-container {
	text-align: center;
}
.search-input {
    width: 80%;
    padding: 5px 5px 5px 30px;
    border-radius: 5px;
    // background-image: url(img/search-sign.png);
    // background-position: left 5px center;
	// background-repeat: no-repeat;

	background: @init-color url('../assets/search-sign.png') left 5px center no-repeat;
    background-size: 17px;
    border: 0;
}
</style>


