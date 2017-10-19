<template>
	<div class="join">
		<common-head></common-head>
		<div class="banner">
			<div class="banner-title">
				<img class="banner-img" src="../assets/join-banner-text.png">
			</div>
			<p class="banner-text">环球旅讯 是全球领先的旅游商业和科技媒体。我们致力于以独立的新闻态度，关注和报道影响旅游业发展的新趋势、新模式和新科技。</p>
		</div>
		<div class="our-team">
			<div class="container">
				<div class="swiper-container team-container">
					<ul class="swiper-wrapper">
						<li class="swiper-slide team-item" v-for="(team, index) in teamList" :key="team[index]">
							<img class="team-photo" :src="team">
						</li>
					</ul>
					<div class="swiper-pagination team-pagination">
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="work-together">
			<div class="container">
				<h3 class="work-title">你将与谁一起工作</h3>
				<div class="work-together-wrapper">
					<div class="swiper-container together-container work-together-content">
						<ul class="swiper-wrapper work-together-list">
							<li class="swiper-slide work-together-item" v-for="work in workList" :key="work.name">
								<div class="work-together-photo">
									<img class="work-together-img" :src="work.img">
								</div>
								<h4 class="work-together-name">{{ work.name }}</h4>
								<p class="welcome-text">{{ work.text }}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="job">
			<div class="container">
				<h3 class="job-title">我们在找这些小伙伴</h3>
				<div class="job-list">
					<div class="job-item">
						<div class="job-icon job-icon-one"></div>
						<p class="job-name">.NET 工程师</p>
						<div class="job-intro">
							<p class="job-site">1 名, 坐标广州</p>
							<p class="job-description">
								在这里你要做什么：1、根据业务需求编写系统需求和设计文档；2、程序编写及相关测试工作；3、系统后续相关维护、分析工作。
							</p>
							<p class="job-description">我们期望中的你：1、计算机或相关专业专科以上学历，1 年以上网站开发经验；2、精通 C#、.NET MVC 编程，对 .NET FrameWork 有一定的认识；3、熟悉至少一种关系型数据库；4、熟悉软件测试流程，熟悉版本控制管理；5、熟悉 HTML5、JavaScript、jQuery、Ajax 等前端技术；6、具有良好的沟通能力和团队合作精神，勇于接受挑战，对新技术充满激情。</p>
							<p class="job-apply">申请该职位，请将简历发送至<br><a class="email-link" href="" target="_blank">fuchen@qq.com</a>。
							</p>
						</div>
					</div>
					<div class="job-item">
						<div class="job-icon job-icon-two"></div>
						<p class="job-name">海外新媒体销售</p>
						<div class="job-intro">
							<p class="job-site">1 名, 坐标广州</p>
							<p class="job-description">
								在这里你要做什么，为公司拉动销售，养活小伙伴们。说得具体些，你需要：1、负责开拓海外企业，有针对性的销售我们的产品；2、负责跟进及维护海外客户；保持良好的合作关系；3、负责海外客户反馈，根据市场需求和客户反馈定期提出产品反馈意见。
							</p>
							<p class="job-description">我们期望中的你：1、出色的英语水平（专八 / BEC 高级）；2、勇于拓展新领域客户，善长分析思考，善于自我学习、提升；3、主观能动性高，出色的销售能力，抗压能力强；4、有 1 年以上销售或电话销售经验；5、心态积极乐观，正能量满满。</p>
							<p class="job-apply">申请该职位，请将简历发送至<br><a class="email-link" href="" target="_blank">fuchen@qq.com</a>。
							</p>
						</div>
					</div>
					<div class="job-item">
						<div class="job-icon job-icon-three"></div>
						<p class="job-name">新媒体销售</p>
						<div class="job-intro">
							<p class="job-site">1 名, 坐标广州</p>
							<p class="job-description">
								在这里你要做什么：1、独立负责开拓适合 “活动联票” 产品线的新客户；2、负责制定 “活动联票” 产品线的销售策略、业绩规划；3、根据客户对 “活动联票” 产品线的反馈和建议，定期反馈产品的修改建议。绝对加分项：优秀的英语能力（如 BEC 中级及以上）。
							</p>
							<p class="job-description">我们期望中的你：1、让人拍手叫好的销售主动性；2、善长分析思考，善于自我学习、提升；3、1 年以上电话销售经验；4、心态积极乐观，正能量满满。</p>
							<p class="job-apply">申请该职位，请将简历发送至<br><a class="email-link" href="" target="_blank">fuchen@qq.com</a>。
							</p>
						</div>
					</div>
				</div>
				<p class="job-tips">
					没有发现合适的岗位？自定义一个吧！把你能够胜任的工作内容告诉我们。如果合适，我们会认真考虑。
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import commonHeader from "@/components/common-head.vue";
export default {
	name: "join",
	data () {
		return {
			teamList: [
				require("../assets/join-1.jpg"),
				require("../assets/join-2.jpg"),
				require("../assets/join-3.jpg"),
				require("../assets/join-4.jpg")
			],
			workList: [
				{
					img: require("../assets/worktogether/charlie.png"),
					name: "Charlie",
					text: "从一个爱好到一份事业，凭的是对行业的那份爱，我们走过了 12 个年头；从一个人，到一个团队，我们在追逐梦想的路上无所畏惧。你会是我们中间的那一个吗？"
				},
				{
					img: require("../assets/worktogether/echo.png"),
					name: "Echo",
					text: "不甘平凡，就和 TDer 一起，不断挑战自己的舒适圈！！！"
				},
				{
					img: require("../assets/worktogether/gini.png"),
					name: "Gini",
					text: "这儿促人向上，充满斗志，期待你的加入 :)"
				},
				{
					img: require("../assets/worktogether/gogo.png"),
					name: "Gogo",
					text: "这里年轻并充满活力，和朝气蓬勃的伙伴们一起不断突破、不断创造，在环球旅讯你将发现超乎想象的自己。"
				},
				{
					img: require("../assets/worktogether/joseph.png"),
					name: "Joseph",
					text: "想知道为什么1841年成立的全球第一家旅行社终于进入中国了吗？想知道为什么说中国航空公司都是高速路上的重型坦克？还有很多关于旅行行业的问题值得探讨，那么，来吧，我们能一起挖掘。"
				},
				{
					img: require("../assets/worktogether/lee.png"),
					name: "Lee",
					text: "看前一小时雷厉风行提方案的人，午休刷着B站傻笑，我时常觉得眩晕。这样一群人偶尔18岁，偶尔48岁。"
				},
				{
					img: require("../assets/worktogether/ling.png"),
					name: "Ling",
					text: "有一份令人幸福的工作是什么体验？干有理想的活，做有情怀的人。"
				},
				{
					img: require("../assets/worktogether/mark.png"),
					name: "Mark",
					text: "我们的征途是星辰大海。To be, or not to be. That is the question."
				},
				{
					img: require("../assets/worktogether/mary.png"),
					name: "Mary",
					text: "你很有逗逼的天分，来和我们一起闯荡江湖。"
				},
				{
					img: require("../assets/worktogether/vicky.png"),
					name: "Vicky",
					text: "如果你爱她/他，就让她/他来环旅，因为这里的人专业得让人敬佩；如果你恨她/他，就让她/他来环旅，因为这里的人逗逼得让人无语。"
				},
				{
					img: require("../assets/worktogether/virginia.png"),
					name: "Virginia",
					text: "Don't set yourself boundaries. 在环旅，请不要吝啬你的想法，请不要停止思考的步伐。对了，我现在缺一名同桌，一线临窗位，能观蓝天能赏日落，你要不要来？"
				},
				{
					img: require("../assets/worktogether/yan.png"),
					name: "Yan",
					text: "来让身和心都在路上，我还没观过世界。这里，我世界观的起始。"
				}
			]
		}
	},
	components: {
		"common-head": commonHeader
	},
	mounted () {
		var team = new Swiper(".team-container", {
			pagination: ".swiper-pagination"
		});

		var togetherSwiper = new Swiper(".together-container", {
			spaceBetween: 15,
			slidesPerView: 1.2,
			centeredSlides: true,
			loop: true
		});
	}
}
</script>

<style lang="less">
@import "../assets/css/swiper-3.4.2.min.css";
.banner {
    height: 200px;
    margin-top: 50px;
	background: url(../assets/join-banner-bg.jpg) no-repeat;
	background-size: 100% 200px;
    overflow: hidden;
}
.banner-title {
    margin: 35px 0 15px 0;
	text-align: center;
}
.banner-img {
    display: inline-block;
    width: 250px;
}
.banner-text {
    box-sizing: border-box;
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
	color: #DDE2EC;
	font-size: 14px;
    line-height: 25px;
    text-align: center;
}
.our-team {
    padding: 40px 0;
    background-color: #fff;
}
.team-photo {
    width: 100%;
}
.team-pagination {
    position: relative;
    bottom: 0 !important;
    margin-top: 20px;
}
.swiper-pagination-bullet {
    display: inline-block;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #A0A0A0;
    margin: 0 5px;
    opacity: 1;
}
.swiper-pagination-bullet-active {
    border: 1px solid #006395;
    background-color: #fff;
}
.work-together {
    padding: 50px 0;
    background-color: #F7F7F7;
}
.work-title {
    text-align: center;
    color: #006395;
    font-size: 22px;
    margin-bottom: 30px;
}
.work-together-wrapper {
    position: relative;
}
.work-together-content {
    position: relative;
    width: 100%;
    height: 430px;
    box-sizing: border-box;
    overflow: hidden;
}
.work-together-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
}
.work-together-item {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    background-color: #fff;
    flex-grow: 0;
    flex-shrink: 0;
    /* margin-right: 15px; */
}
.work-together-photo {
    margin-bottom: 15px;
    text-align: center;
}
.work-together-img {
    display: inline-block;
}
.work-together-name {
	color: #666666;
    text-align: center;
    margin-bottom: 15px;
}
.welcome-text {
    position: relative;
	padding: 30px 0;
	font-size: 14px;
	line-height: 25px;
	color: #666666;
	text-align: center;
	&:before, &:after {
		position: absolute;
		left: 50%;
		width: 20px;
		height: 20px;
		content: "";
		margin-left: -10px;
	}
	&:before {
		top: 0;
		background: url(../assets/comma-a.png) no-repeat;
		background-size: contain;
	}
	&:after {
		bottom: 0;
		background: url(../assets/comma-b.png) no-repeat;
		background-size: contain;
	}
}
.job {
    padding: 50px 0;
}
.job-title {
    text-align: center;
    color: #006395;
    font-size: 22px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #b5b5b5;
}
.job-list {
    overflow: hidden;
}
.job-item {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px dashed #b5b5b5;
    text-align: center;
    color: #666666;
}
.job-icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto 15px;
}
.job-icon-one {
    background: url(../assets/recruitment-1.png) #F0EDED center no-repeat;
}
.job-icon-two, .job-icon-three {
    background: url(../assets/recruitment-3.png) #F0EDED center no-repeat;
}
.job-name {
    font-size: 15px;
	margin-bottom: 20px;
	color: #666666;
}
.job-intro {
	font-size: 14px;
	line-height: 25px;
	color: #666666;
	> p {
		margin-bottom: 10px;
    	text-align: left;
	}
	> .job-description {
		text-align: justify;
	}
}
.email-link {
    color: #006395;
}
.job-tips {
	font-size: 14px;
    line-height: 25px;
    color: #999999;
}
</style>


