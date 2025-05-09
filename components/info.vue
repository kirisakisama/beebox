<template>
	<view :class="style">
		<view class="main">
			<view class="person">
				<view class="avatar">
					<image mode="aspectFit" src="/static/resource/kirisaki.jpg"></image>
				</view>
				<view class="name">kirisaki</view>
				<view class="phonenum">+86 1781455009</view>
			</view>
			<view class="options">
				<view class="op">
					<image mode="aspectFit" src="/static/resource/person.png"></image>
					个人资料
				</view>
				<view class="op">
					<image mode="aspectFit" src="/static/resource/devices.png"></image>
					设备管理
				</view>
				<view class="op">
					<image mode="aspectFit" src="/static/resource/collect-per.png"></image>
					收藏
				</view>
				<view class="op">
					<image mode="aspectFit" src="/static/resource/space.png"></image>
					空间
				</view>
				<view class="op">
					<image mode="aspectFit" src="/static/resource/price.png"></image>
					盈利
				</view>
			</view>
			<view class="setAndHelp">
				<view class="op">
					<image mode="aspectFit" src="/static/resource/set.png"></image>
					设置
				</view>
				<view class="op">
					<image mode="aspectFit" src="/static/resource/help.png"></image>
					帮助
				</view>
			</view>
			<view class="theme">
				<image mode="aspectFit" src="/static/resource/sun.png"></image>
			</view>
		</view>
		<view class="mask" @click="changeState"></view>
	</view>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
const style=reactive({
	info:true,
	active:false
})
const changeState=()=>{
	style.active=!style.active;
}
defineExpose({
	changeState
})
</script>

<style scoped>
	.info{
		width: 200vw;
		height: 100vh;
		position: absolute;
		z-index: 8;
		transform: translateX(-80vw);
		display: flex;
		transition: transform 0.2s ease-in-out;
		pointer-events: none;
	}
	.info .main{
		width: 80vw;
		height: 100%;
		background-color: #ffffff;
		box-sizing: border-box;
		padding-top: 35px;
		padding-left: 20px;
		position: relative;
	}
	.info .mask{
		width: 120vw;
		height:100%;
		pointer-events: none;
		transition: background-color 0.2s ease-in-out;
	}
	.info.active{
		transform: translateX(0);
		pointer-events: auto;
	}
	.info.active .mask{
		display: block;
		background-color: #00000058;
		pointer-events: auto;
	}
	.person{
		width: 90%;
		border-bottom: 1px solid #00000017;
	}
	.person .avatar{
		width: 70px;
		height: 70px;
		border-radius: 50%;
		overflow: hidden;
	}
	.avatar image{
		width: 100%;
		height: 100%;
	}
	.person .name{
		font-size: 27px;
		font-weight: 600;
		margin-top: 10px;
	}
	.person .phonenum{
		font-size: 20px;
		color:#00000089;
		margin-bottom: 10px;
	}
	.op{
		margin: 30px 0px;
		font-size: 20px;
		font-weight: 600;
		display: flex;
		align-items: center;
	}
	.op image{
		width: 30px;
		height: 30px;
		margin-right: 15px;
	}
	.options{
		width: 90%;
		border-bottom: 1px solid #00000017;
	}
	.theme{
		width: 40px;
		height: 40px;
		position: absolute;
		bottom: 30px;
	}
	.theme image{
		width: 100%;
		height: 100%;
	}
</style>