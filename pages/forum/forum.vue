<template>
	<view class="forum">
		<infoVue ref="info"></infoVue>
		<headSpringVue></headSpringVue>
		<view class="head">
			<view class="head1">
				<view class="avatar" @click="openInfo()">
					<image src="/static/resource/kirisaki.jpg"></image>
				</view>
				<view class="search">
					<view class="search-ico"><image mode="aspectFit" src="/static/resource/search.png"></image></view>
					<view class="input"><input/></view>
				</view>
				<view class="msg">
					<image mode="aspectFit" src="/static/resource/msg.png"></image>
				</view>
			</view>
			<view class="head2">
				<view class="op op1" @click="changeChoice(true)">论坛中心</view>
				<view class="op op2" @click="changeChoice(false)">专家辅导</view>
				<view class="choice"></view>
			</view>
		</view>
		<view class="main">
			<scroll-view class="posts" scroll-y>
				<postVue></postVue>
				<postVue></postVue>
				<postVue></postVue>
				<view class="spring"></view>
			</scroll-view>
			<view class="experts">
				<expertVue></expertVue>
				<expertVue></expertVue>
				<expertVue></expertVue>
				<view class="spring"></view>
			</view>
		</view>
		
		<beeTarbarVue class="TarBar"></beeTarbarVue>
	</view>
</template>

<script lang="ts" setup>
import beeTarbarVue from '../../components/beeTarbar.vue';	
import headSpringVue from '../../components/head-spring.vue';
import postVue from '../../components/post.vue';
import expertVue from '../../components/expert.vue';
import infoVue from '../../components/info.vue';
import {ref,computed} from 'vue';

interface post{
	avatar:string,
	name:string,
	ago:string,
	content:string,
	picture:string[],
	comment:number,
	like:number,
	collection:number,
	view:number
}

const choice=ref(true);

const getChoice=computed(()=>{
	if(choice.value)
		return `translateX(-94px)`;
	else
		return `translateX(94px)`;
})

const getContent=computed(()=>{
	if(choice.value)
		return `translateX(0)`;
	else
		return `translateX(-100vw)`;
})
const changeChoice=(flag:boolean)=>{
	choice.value=flag;
}

const info=ref(null);
const openInfo=()=>{
	info.value.changeState();
}

</script>

<style scoped>
	.forum{
		height:calc(100vh);
		box-sizing: border-box;
		position: relative;
		overflow:hidden;
	}
	.TarBar{
		position: absolute;
		z-index: 7;
		bottom: 0px;
	}
	.head{
		width: 100vw;
		height: auto;
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
	.search{
		height: 38px;
		border: 1px solid #00000017;
		border-radius: 20px/50%;
		position: absolute;
		left:20%;
		right:20%;
		top:8px;
		display: flex;
		align-items: center;
		padding-right: 10px;
	}
	.search-ico{
		height: 100%;
		width: 20%;
		box-sizing: border-box;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search-ico image{
		display: block;
		height: 80%;
		width:100%;
	}
	.input{
		width: 80%;
	}
	.msg{
		width: 40px;
		position: absolute;
		right: 12px;
		top: 10%;
		bottom: 10%;
	}
	.msg image{
		width: 100%;
		height: 100%;
	}
	.head2{
		width: 100vw;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: relative;
		/* background-color: antiquewhite; */
	}
	.head2 .op{
		font-size: 20px;
		font-weight: 600;
	}
	.head2 .choice{
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
		width:200vw;
		display: flex;
		transition: transform 0.2s ease-in-out;
		transform: v-bind(getContent);
	}
	.posts{
		width: 100vw;
		max-height: calc(100vh - 187px);
		overflow: auto;
	}
	.posts .spring{
		height: 60px;
	}
	.experts{
		width: 100vw;
		max-height: calc(100vh - 187px);
		overflow: auto;
	}
	.experts .spring{
		height: 60px;
	}
</style>
