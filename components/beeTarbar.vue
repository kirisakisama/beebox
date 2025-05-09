<template>
	<view class="beeTarbar">
		<view class="content">
		<view class="spring"></view>
		<view class="TarB" @click="toHome">
			<image mode="aspectFit" src="/static/resource/home.png"></image>
		</view>
		<view class="TarB Agent" @click="toAgent">
			<image mode="aspectFit" src="/static/resource/agent.png"></image>
		</view>
		<view class="TarB" @click="toForum">
			<image mode="aspectFit" src="/static/resource/bbs.png"></image>
		</view>
		<view class="spring"></view>
		</view>
		<view class="hr"></view>
		<view class="contentAfter"></view>
	</view>
</template>
<script setup>
const toHome=()=>uni.reLaunch({
	url: '/pages/index/index'
});
const toAgent=()=>uni.reLaunch({
	url: '/pages/agent/agent'
})
const toForum=()=>uni.reLaunch({
	url: '/pages/forum/forum'
})
</script>
<style scoped>
	.content{
		width: 99vw;
		display:flex;
		justify-content:space-between;
		align-items: baseline;
	}
	.contentAfter{
		width: 99vw;
		height: 0px;
	}
	.spring{
		width:0px;
	}
	.TarB{
		width:40px;
		height: 40px;
		border-radius: 50%;
	}
	.TarB.Agent{
		width: 80px;
		height: 80px;
		background-color: #CCCCCC;
		position: relative;
		bottom: 3px;
	}
	.TarB image{
		width: 100%;
		height: 100%;
	}
	.hr{
		width: 100vw;
		height: 60px;
		background-color: #ffffff;
		border-top:1px solid #00000017;
		transform: translateY(-45px);
		position: absolute;
		z-index: -1;
	}
</style>