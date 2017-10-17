<template>
	<div class="channel">
		<app-header @showCategory="showCategory" @showSearch="showSearch"></app-header>
		<app-menu :menuList="menuList"></app-menu>
		<div class="container">
			<div class="channel-lists">
				<template v-for="(channel, index) in channelList">
					<div class="channel-item" :key="channel.title">
						<h4 class="channel-title">
							<a :href="channel.link">{{ channel.title }}</a>
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
import appHeader from "@/components/app-header.vue";
import appMenu from "@/components/app-menu.vue";
import advertise from "@/components/advertise.vue";
export default {
	name: "channel",
	data () {
		return {
			menuList: [
				{ link: "/", text: "首页" },
				{ link: "/channel/1", text: "在线旅游" },
				{ link: "/channel/2", text: "酒店" },
				{ link: "/channel/3", text: "航空公司" },
				{ link: "/channel/4", text: "出入境及目的地" },
				{ link: "/channel/5", text: "投资并购" },
				{ link: "/channel/6", text: "旅游分销商" },
				{ link: "/channel/7", text: "旅游科技" },
				{ link: "/channel/8", text: "旅游分销系统" },
				{ link: "/channel/9", text: "商务及奖励旅游" },
				{ link: "/channel/10", text: "邮轮" },
				{ link: "/channel/11", text: "租车" },
				{ link: "/channel/12", text: "机场" },
				{ link: "/channel/13", text: "高铁" },
				{ link: "/channel/14", text: "推荐" },
				{ link: "/channel/15", text: "评论" },
				{ link: "/channel/16", text: "译讯" },
				{ link: "/channel/17", text: "创业" },
				{ link: "/channel/18", text: "精选" },
				{ link: "/channel/19", text: "企业新闻" }
			],
			channelList: "",
			advertise: {
				id: "xcode81",
				link: "http://event.traveldaily.cn/adc2017/",
				img: require("../assets/advertise-1.jpg")
			}
		}
	},
	components: {
		"app-header": appHeader,
		"app-menu": appMenu,
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
.channel {
	margin-top: 100px;
}
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


