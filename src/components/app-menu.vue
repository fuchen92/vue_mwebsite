<template>
	<div class="nav-menu">
		<div class="container">
			<ul class="menu-list">
				<template v-for="menu in menuList">
					<li class="menu-item" :key="menu.text">
						<router-link class="menu-link" :to="menu.link" active-class="menu-active" exact>{{ menu.text }}</router-link>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "app-menu",
	props: {
		menuList: {
			required: true,
			type: Array
		}
	}
}
</script>

<style lang="less">
	@import "../assets/variable.less";
	.nav-menu {
		position: fixed;
		top: 50px;
		width: 100%;
		height: 50px;
		background-color: @init-color;
		z-index: 10;
		transition: top 0.1s;
	}
	.menu-list {
		width: 100%;
		height: 50px;
		white-space: nowrap;
		overflow: hidden;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.menu-item {
		display: inline-block;
		width: auto;
		font-size: 16px;
		margin-right: 20px;
	}
	.menu-link {
		line-height: 38px;
		margin-top: 10px;
		color: @menu-color;
	}
	.menu-active {
		border-bottom: 2px solid @basic-color;
	}
</style>


