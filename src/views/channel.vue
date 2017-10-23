<template>
	<div class="channel">
		<div class="container">
			<div class="channel-lists">
				<template v-for="(channel, index) in channelList">
					<div class="channel-item" :key="channel.title">
						<h4 class="channel-title">
							<!-- <a :href="channel.link">{{ channel.title }}</a> -->
							<router-link :to="channel.link">{{ channel.title }}</router-link>
						</h4>
						<div class="times">{{ channel.time }}</div>
						<p class="channel-intro">{{ channel.intro }}</p>
					</div>
					<advertise :advertise="advertise" v-if="index == 2" :key="index"></advertise>
				</template>
			</div>
			<div class="more-channel-btn" id="readmore">加载更多</div>
		</div>
	</div>
</template>

<script>
import advertise from "@/components/advertise.vue";
export default {
	name: "channel",
	data () {
		return {
			channelList: "",
			advertise: {
				id: "xcode81",
				link: "http://event.traveldaily.cn/adc2017/",
				img: require("../assets/advertise-1.jpg")
			}
		}
	},
	components: {
		"advertise": advertise
	},
	created () {
		this.$http.get("/api/news").then(res => {
			this.channelList = res.data;
		})
	}
}
</script>

<style lang="less">
@import "../assets/variable.less";
.channel-item {
    padding: 30px 0;
    border-bottom: 1px solid #E4E4E4;
}
.channel-title {
    font-weight: bold;
    margin-bottom: 10px;
	font-size: 16px;
	> a {
		color: @post-title-color;
	}
}
.times {
    box-sizing: border-box;
    padding-left: 25px;
	color: @newstime-color;
	background: url(../assets/time.png) left center no-repeat;
    background-size: contain;
    font-size: 13px;
    margin-bottom: 10px;
}
.channel-intro {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	font-size: 14px;
    color: @newsintro-color;
    line-height: 25px;
}
.channel-item:nth-last-child(1) {
    border-bottom: 0;
}
.more-channel-btn {
    height: 35px;
    line-height: 35px;
    color: @init-color;
    background-color: @basic-color;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
    margin: 20px 0 50px;
}
.more-channel-btn:active {
    background-color: #D1D1D1;
}
</style>


