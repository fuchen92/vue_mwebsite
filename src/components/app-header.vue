<template>
	<nav class="nav">
		<div class="container">
			<div class="hamburger-menu lt" @click="showCategory">
				<div class="hamburger-item hamburger-top"></div>
				<div class="hamburger-item hamburger-middle"></div>
				<div class="hamburger-item hamburger-bottom"></div>
			</div>
			<div class="header-search rt" @click="showSearch"></div>
			<h3 class="site-name">
				<router-link to="/">
					<img class="site-logo" src="../assets/site-logo.png">
				</router-link>
			</h3>
		</div>
	</nav>
</template>

<script>
export default {
	name: "appHeader",
	methods: {
		showCategory () {
			this.$emit("showCategory");
		},
		showSearch () {
			this.$emit("showSearch");
		}
	}
}
</script>

<style lang="less">
	@import "../assets/variable.less";
	.nav {
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-color: @init-color;
		border-bottom: 1px solid #DFDFDF;
		z-index: 10;
	}
	.hamburger-menu {
		position: relative;
		width: 32px;
		height: 23px;
		margin-top: 13.5px;
		.hamburger-item {
			position: absolute;
			width: 32px;
			height: 3px;
			border-radius: 3px;
			background-color: @basic-color;
			-webkit-transform-origin: left center;
			transform-origin: left center;
			-webkit-transition: .5s;
			transition: .5s;
		}
		.hamburger-middle {
			top: 10px;
			left: 0;
		}
		.hamburger-bottom {
			top: 20px;
			left: 0;
		}
	}
	.header-search {
		width: 25px;
		height: 30px;
		margin-top: 10px;
		background: url(../assets/search.png) no-repeat;
		background-size: contain;
		cursor: pointer;
	}
	.site-name {
		width: 100%;
		height: 100%;
		text-align: center;
	}
	.site-logo {
		display: inline-block;
		margin-top: 10px;
		width: 80px;
	}
</style>


