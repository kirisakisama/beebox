<template>
	<view class="notice">
		<headSpringVue></headSpringVue>
		<view class="header">
			<view class="title">通知</view>
			<view class="selector">全部</view>
			<view class="options">
				<view class="op">工作区</view>
				<view class="op">社交</view>
				<view class="choice"></view>
			</view>
		</view>
		<view class="main">
			<view class="work">
				<view class="top">
					<view class="topTitle">
						置顶
						<view class="line"></view>
					</view>
					<template v-for="notice in topNotices">
						<view class="aNotice top">
							<view class="icon">
								<image mode="aspectFit" :src="notice.icon"></image>
							</view>
							<view class="container">
								<view class="title">{{notice.title}}</view>
								<view class="content">{{notice.message}}</view>
								<view class="time">{{notice.time}}</view>
							</view>
						</view>
					</template>
					<view class="line" style="width: 92%;"></view>
				</view>
				<view class="normul">
					<template v-for="notice in notices">
						<view class="aNotice">
							<view class="icon">
								<image mode="aspectFit" :src="notice.icon"></image>
							</view>
							<view class="container">
								<view class="title">{{notice.title}}</view>
								<view class="content">{{notice.message}}</view>
								<view class="time">{{notice.time}}</view>
							</view>
						</view>
					</template>
				</view>
				<view style="height:30px"></view>
			</view> 
			<view class="media">
				<view style="height:30px"></view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {ref,computed} from 'vue';
import headSpringVue from '../../components/head-spring.vue';
import {getNotice} from '../../components/get';
interface notice{
	message:string,
	time:string,
	title:string,
	icon:string
}
const notices=ref<notice[]>([]);
const topNotices=ref<notice[]>([]);
notices.value=getNotice()[1];
topNotices.value=getNotice()[0];

const choice=ref(true);

const getChoice=computed(()=>{
	if(choice.value)
		return `translateX(-94px)`;
	else
		return `translateX(94px)`;
})
</script>

<style scoped>
	.notice{
		height:calc(100vh);
		box-sizing: border-box;
		position: relative;
		overflow:hidden;
	}
	.header{
		/* height: 30%; */
		border-bottom: 3px solid #00000017;
	}
	.header .title{
		text-align: center;
		font-size: 24px;
		font-weight: bold;
		margin-top: 10px;
	}
	.header .selector{
		width: 90%;
		height: 60px;
		margin: auto;
		margin-top:25px;
		margin-bottom: 20px;
		background-color: #f3f4f6;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		font-weight: 800;
		color:#b2bec3;
	}
	.header .options{
		width: 100vw;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: relative;
	}
	.header .options .op{
		font-size: 20px;
		font-weight: 600;
	}
	.header .options .choice{
		width: 120px;
		height: 5px;
		background-color: #2F65ED;
		position: absolute;
		border-radius: 3px/50%;
		bottom: -3px;
		transition: transform 0.2s ease-in-out;
		transform: v-bind(getChoice);
	}
	.main{
		width: 100vw;
		height: calc(100vh - 217px);
		display: flex;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.work{
		width: 100%;
		min-width: 100%;
		box-sizing: border-box;
		padding: 20px 30px;
	}
	.media{
		width: 100%;
		min-width: 100%;
	}
	.top .topTitle{
		display: flex;
		align-items: center;
		color: #00000077;
		border: bold;
	}
	.line{
		width: 80%;
		height: 1px;
		margin: auto;
		background-color: #00000017;
	}
	.aNotice{
		display: flex;
		align-items: center;
		width: 100%;
		height: 100px;
		border-radius: 10px;
		background-color: #dfe6e9;
		box-sizing: border-box;
		padding: 10px;
		margin-top: 10px;
		margin-bottom: 20px;
		position: relative;
	}
	.aNotice.top::before {
		content: '';
		min-width: 15px;
		min-height: 15px;
		background-color: #e74c3c;
		position: absolute;
		bottom: 10px;
		right: 10px;
		border-radius: 50%;
	}
	.aNotice .icon{
		min-width: 40px;
		min-height: 40px;
		border-radius: 10px;
		overflow: hidden;
		margin:10px;
		/* margin-left: 0; */
		background-color: #2F65ED;
	}
	.aNotice .icon image{
		width: 100%;
		height: 100%;
	}
	.aNotice .container .title{
		font-size: 20px;
	}
	.aNotice .container .content{
		color:#636e72;
		line-height: 20px;
		max-height: 40px;
		overflow: hidden;
	}
	.aNotice .container .time{
		color:#bdc3c7;
	}
	.normul{
		margin-top: 20px;
	}
</style>
