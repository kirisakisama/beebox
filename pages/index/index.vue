<template>
	<view class="content">
		<infoVue ref="info"></infoVue>
		<headSpringVue></headSpringVue>
		<view class="head">
			<view class="head1">
				<view class="avatar" @click="openInfo()">
					<image src="/static/resource/kirisaki.jpg"></image>
				</view>
				<view class="QuickReminder">
					<view class="reminder">
						<!-- <web-view src="../../static/html/lottie/colorBall.html" width="1716" height="1716" frameborder="0"></web-view> -->
						<iframe src="https://cdn.lottielab.com/l/Dij13FXbzdB8G1.html" width="1716" height="1716" frameborder="0"></iframe>
					</view>
				</view>
				<view class="notice" @click="goNotice">
					<image mode="aspectFit" src="/static/resource/notice.png"></image>
					<view class="noticeCount" v-show="noticeView">{{ noticeCent }}</view>
				</view>
				<view class="more">
					<image mode="aspectFit" src="/static/resource/more.png"></image>
				</view>
			</view>
			<view class="head2er">
				<view class="head2" >
					<template v-for="value in list">
						<view class="fx">{{value}}</view>
					</template>
					<view class="selectN"></view>
					<view class="selectN filter"></view>
				</view>
			</view>
		</view>
		<view class="cards">
			<view class="card" @click="goCard(1)">
				<view class="card-head">
					<view class="card-avatar"><image mode="aspectFit" src="/static/resource/Detector.png"></image></view>
					<view class="card-title">温湿监测</view>
				</view>
				<view class="card-block block1" style="margin-bottom: 10px;">
					<view class="blockTitle">温度</view><view class="flag normalRang">&gt;</view>
					<view class="datas">
						<view class="data">{{temperature}}℃</view>
						<view class="descr normulData">正常范围</view>
					</view>
				</view>
				<view class="card-block block2">
					<view class="blockTitle">湿度</view><view class="flag overRang">&gt;</view>
					<view class="datas">
						<view class="data">{{humidity}}%</view>
						<view class="descr overData">偏高</view>
					</view>
				</view>
			</view>
			<view class="card" @click="goCard(2)">
				<view class="card-head">
					<view class="card-avatar" style="background-color: #FFEB3B;"><image mode="aspectFit" src="/static/resource/produce.png"></image></view>
					<view class="card-title">质量监测</view>
				</view>
				<view class="card-block block3" style="margin-bottom: 10px;">
					<view class="blockTitle">当前质量</view>
					<view class="production">{{production}}kg</view>
					<view class="progress">
						<view class="progressBarContain"><view class="progressBar"></view></view>
						<view class="progressData">{{percentage}}%</view>
					</view>
				</view>
				<view class="card-block block4">
					<view class="blockTitle">生产速率</view>
					<view class="speed">
						<view class="speedData">{{speed}}kh/h</view>
						<view class="speedDescr">效率{{efficiency}}%</view>
					</view>
				</view>
			</view>
			<view class="card" @click="goCard(3)">
				<view class="card-head">
					<view class="card-avatar" style="background-color: #FF8D1A;"><image mode="aspectFit" src="/static/resource/bee.png"></image></view>
					<view class="card-title">数量监测</view>
				</view>
				<view class="card-block block5" style="margin-bottom: 10px;">
					<view class="blockTitle">入箱</view><view class="flag normalRang">&gt;</view>
					<view class="datas">
						<view class="data">{{enter}}</view>
						<view class="descr normulData">+12 今日</view>
					</view>
				</view>
				<view class="card-block block6">
					<view class="blockTitle">出箱</view><view class="flag overRang">&gt;</view>
					<view class="datas">
						<view class="data">{{go}}</view>
						<view class="descr overData">-9 今日</view>
					</view>
				</view>
			</view>
			<view class="card" @click="goCard(4)">
				<view class="card-head">
					<view class="card-avatar" style="background-color: #F4A1FF;"><image mode="aspectFit" src="/static/resource/Camera.png"></image></view>
					<view class="card-title">实时监测</view>
				</view>
				<view class="block7">
					<view class="datas">
						<view class="state">设备状态：<text class="stateValue Ok">{{deviceState}}</text></view>
						<view class="delay">网络延迟：<text class="delayValue middle">{{delay}} ms</text></view>
					</view>
					<view class="vedioBlock">
						<view class="vedioPoint"></view>
					</view>
				</view>
			</view>
		</view>
		<beeTarbarVue class="TarBar"></beeTarbarVue>
	</view>
</template>

<script lang="ts" setup>
import beeTarbarVue from '../../components/beeTarbar.vue';	
import headSpringVue from '../../components/head-spring.vue';
import infoVue from '../../components/info.vue';
import {ref,computed} from 'vue';
type state= "正常运行"|"无法连接";

const noticeCent=ref<number>(0);

const noticeView=computed(()=>noticeCent.value>0)

const list=ref(['-','-',1,2,3,4,5,6,7,8,9,'-','-']);

const temperature=ref<number>(0)
const humidity=ref<number>(0)

const enter=ref<number>(0)
const deltaEnter=ref<number>(0)
const go=ref<number>(0)
const deltaGo=ref<number>(0)

const production=ref<number>(0)
const percentage=ref<number>(0)
const efficiency=ref<number>(0)
const speed=ref<number>(0)

const delay=ref<number>(0)
const deviceState=ref<state>("正常运行")

const goCard=(index:number)=>{
	uni.navigateTo({
		url:`/pages/index/card${index}`,
		animationType: 'slide-in-right',
		animationDuration: 200
	});
}

const goNotice=()=>{
	uni.navigateTo({
		url:`/pages/index/notice`,
		animationType: 'slide-in-right',
		animationDuration: 200
	});
}
const info=ref(null);
const openInfo=()=>{
	info.value.changeState();
}
temperature.value=29;
humidity.value=59;
production.value=56;
percentage.value=75;
speed.value=5;
efficiency.value=92;
enter.value=35;
deltaEnter.value=12;
go.value=29;
deltaGo.value=-9;
delay.value=129;
</script>

<style scoped>
	.content{
		height:calc(100vh);
		box-sizing: border-box;
		/* display:flex;
		flex-direction: column; */
		position: relative;
		overflow:hidden;
	}
	.head{
		width: 100vw;
		height: 130px;
		border-bottom: 3px solid #00000017;
	}
	.head1{
		width:100%;
		height: 63px;
		position: relative;
	}
	.avatar{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		margin: 10px;
	}
	.avatar image{
		margin: 0;
		width: 100%;
		height: 100%;
	}
	.QuickReminder{
		position: absolute;
		top:15%;
		bottom: 25%;
		left: 30%;
		right: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border-radius: 20px/50%;
		background-color: #6EFF1A; */
	}
	.reminder{
		width: 100px;
		height: 100px;
		/* background-color: #5CFC2B; */
	}
	.reminder iframe{
		width: 100%;
		height: 100%;
	}
	.notice{
		width: 30px;
		height: 30px;
		position:absolute;
		top:10px;
		right: 60px;
		/* background-color: aqua; */
	}
	.notice image{
		width:100%;
		height: 100%;
	}
	.notice .noticeCount{
		width: 23px;
		height: 23px;
		position: absolute;
		bottom:-8px;
		right: -13px;
		background-color: #ee5253;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		border-radius: 50%;
	}
	.more{
		width: 30px;
		height: 30px;
		position:absolute;
		top:10px;
		right: 10px;
	}
	.more image{
		width:100%;
		height: 100%;
	}
	.head2{
		width: 96%;
		height: 50px;
		margin: auto;
		background-color: #CCCCCC;
		border-radius: 25px/50%;
		display: flex;
		align-items: center;
		/* position: relative; */
		scroll-snap-align: center;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	}
	.head2::-webkit-scrollbar {
	  display: none;
	}
	.head2 .fx{
		z-index: 2;
		font-size: 25px;
		min-width: 20%;
		text-align: center;
		scroll-snap-align: center;
		scroll-snap-stop: always;
		/* flex-shrink :1; */
		scrollbar-width: none; 
	}
	.selectN{
		position: absolute;
		background-color: #DD29CB;
		top: 2px;
		bottom: 2px;
		left: 38%;
		right: 38%;
		z-index: 1;
		border-radius: 20px/50%;
	}
	.filter{
		z-index:4;
		background-color: transparent;
		backdrop-filter: invert(1);
		pointer-events: none;
	}
	.head2er{
		position: relative;
	}
	.cards{
		width: 100vw;
		display:grid;
		box-sizing: border-box;
		padding: 10px;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
	.cards .card{
		height:250px;
		border: 1px solid #00000021;
		border-radius: 12.16px;
		box-shadow: 1px 1px 1px #00000040;
	}
	.card .card-head{
		width: 100%;
		display: flex;
		box-sizing: border-box;
		padding: 8px;
	}
	.card-head .card-avatar{
		width: 50px;
		height: 50px;
		background-color: #77D4FC;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card-head .card-avatar image{
		width: 80%;
		height: 80%;
	}
	.card-head .card-title{
		margin-left: 10px;
		font-size: 20px;
		font-weight: bold;
	}
	.card-block{
		width: 90%;
		height: 80px;
		margin: auto;
		border-radius: 10px;
		background-color: #EDEDED85;
	}
	.block1{
		box-sizing: border-box;
		padding: 10px;
		padding-top: 5px;
		position: relative;
	}
	.block1 .blockTitle{
		color: #C4C4C4;
		font-size: 18px;
		font-weight: 600;
	}
	.block1 .flag{
		width: 5px;
		height: 5px;
		font-size: 18px;
		font-weight: 600;
		position: absolute;
		top: 40px;
		left: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.block1 .flag.normalRang{
		color:#4CB012;
		transform: rotate(-90deg);
	}
	.block1 .flag.overRang{
		color:#D43030;
		transform: rotate(90deg);
	}
	.block1 .datas{
		position: relative;
		left: 50px;
		bottom: 3px;
	}
	.datas .data{
		font-size: 23px;
		color: #77D4FC;
	}
	.datas .descr{
		font-size: 9px;
	}
	.datas .descr.normulData{
		color: #6EFF1A;
	}
	.datas .descr.overData{
		color: #F51414;
	}
	.block2{
		box-sizing: border-box;
		padding: 10px;
		padding-top: 5px;
		position: relative;
	}
	.block2 .blockTitle{
		color: #C4C4C4;
		font-size: 18px;
		font-weight: 600;
	}
	.block2 .flag{
		width: 5px;
		height: 5px;
		font-size: 18px;
		font-weight: 600;
		position: absolute;
		top: 40px;
		left: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.block2 .flag.normalRang{
		color:#4CB012;
		transform: rotate(-90deg);
	}
	.block2 .flag.overRang{
		color:#D43030;
		transform: rotate(90deg);
	}
	.block2 .datas{
		position: relative;
		left: 50px;
		bottom: 3px;
	}
	.block3{
		box-sizing: border-box;
		padding: 10px;
		padding-top: 5px;
		position: relative;
	}
	.block3 .blockTitle{
		color: #C4C4C4;
		font-size: 18px;
		font-weight: 600;
	}
	.block3 .production{
		position: relative;
		left: 30px;
		bottom: 0px;
		font-size: 23px;
		color: #FFC800;
	}
	.block3 .progress{
		width: 90%;
		margin: auto;
		display: flex;
		align-items: center;
	}
	.progress .progressBarContain{
		width: 70%;
		margin-right: 5px;
	}
	.progress .progressBar{
		width: 75%;
		height: 5px;
		border-radius: 3px/50%;
		background-color: #FFC300;
	}
	.progress .progressData{
		color:#C4C4C4;
	}
	.block4{
		box-sizing: border-box;
		padding: 10px;
		padding-top: 5px;
		position: relative;
	}
	.block4 .blockTitle{
		color: #C4C4C4;
		font-size: 18px;
		font-weight: 600;
	}
	.block4 .speed{
		width:90%;
		margin:auto;
	}
	.speed .speedData{
		margin:auto;
		text-align:center;
		color:#FFC800;
		font-size:20px;
	}
	.speed .speedDescr{
		margin:auto;
		text-align:center;
		color:#6EFF1A;
	}
	.block5{
		box-sizing: border-box;
		padding: 10px;
		padding-top: 5px;
		position: relative;
	}
	.block5 .blockTitle{
		color: #C4C4C4;
		font-size: 18px;
		font-weight: 600;
	}
	.block5 .flag{
		width: 5px;
		height: 5px;
		font-size: 18px;
		font-weight: 600;
		position: absolute;
		top: 40px;
		left: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.block5 .flag.normalRang{
		color:#4CB012;
		transform: rotate(-90deg);
	}
	.block5 .flag.overRang{
		color:#D43030;
		transform: rotate(90deg);
	}
	.block5 .datas{
		position: relative;
		left: 50px;
		bottom: 3px;
	}
	.block5 .datas .data{
		font-size: 23px;
		color: #FFA74F;
	}
	.datas .descr{
		font-size: 9px;
	}
	.datas .descr.normulData{
		color: #6EFF1A;
	}
	.datas .descr.overData{
		color: #F51414;
	}
	.block6{
		box-sizing: border-box;
		padding: 10px;
		padding-top: 5px;
		position: relative;
	}
	.block6 .blockTitle{
		color: #C4C4C4;
		font-size: 18px;
		font-weight: 600;
	}
	.block6 .flag{
		width: 5px;
		height: 5px;
		font-size: 18px;
		font-weight: 600;
		position: absolute;
		top: 40px;
		left: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.block6 .flag.normalRang{
		color:#4CB012;
		transform: rotate(-90deg);
	}
	.block6 .flag.overRang{
		color:#D43030;
		transform: rotate(90deg);
	}
	.block6 .datas{
		position: relative;
		left: 50px;
		bottom: 3px;
	}
	.block6 .datas .data{
		font-size: 23px;
		color: #FFA74F;
	}
	.datas .descr{
		font-size: 9px;
	}
	.datas .descr.normulData{
		color: #6EFF1A;
	}
	.datas .descr.overData{
		color: #F51414;
	}
	.block7{
		width:100%;
	}
	.block7 .datas{
		width:90%;
		margin:auto;
	}
	.block7 .datas .state,.delay{
		color: #C4C4C4;
		font-weight: 600;
	}
	.stateValue.Ok{
		color:#5CFC2B;
	}
	.stateValue.Wrong{
		color:#F51414;
	}
	.delayValue.fast{
		color:#5CFC2B;
	}
	.delayValue.middle{
		color:#FFA74F;
	}
	.delayValue.slow{
		color:#F51414;
	}
	.vedioBlock{
		width:90%;
		height:100px;
		margin:auto;
		margin-top:20px;
		border-radius:10px;
		background-color:#292929;
		position: relative;
	}
	.vedioPoint{
		width: 10px;
		height: 10px;
		background-color: #47B825;
		position: absolute;
		top:10px;
		left: 10px;
		border-radius: 50%;
	}
	.TarBar{
		position: absolute;
		z-index: 7;
		bottom: 0px;
	}
	/* .cards{
		display: none;
	} */
</style>
