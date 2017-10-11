<template>
	<div :id="advertise.id">
		<div class="advertise">
			<a :href="advertise.link">
				<img :src="advertise.img">
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "advertise"
}
</script>

<style lang="less">
.advertise {
	position: relative;
	font-size: 0;
	margin: 20px auto 0;
}
</style>


