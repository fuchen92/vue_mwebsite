<template>
	<div class="header-top">
		<div class="container">
			<div class="header-arrow lt" onclick="history.go(-1)"></div>
			<h3 class="site-name">
				<a href="#/">
					<img class="site-logo" src="../assets/site-logo.png">
				</a>
			</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: "common-header"
}
</script>

<style lang="less">
.header-top {
    position: fixed;
    box-sizing: border-box;
    // position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    z-index: 15;
    border-bottom: 1px solid #DFDFDF;
}
.header-arrow {
    width: 15px;
    height: 20px;
    margin-top: 15px;
	background: url(../assets/header-arrow.png) left center no-repeat;
	background-size: contain;
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


