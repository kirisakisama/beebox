<template>
	<view class="test">
		<view class="head2er">
			<view class="head2" @scroll="handle"
			scroll-with-animation>
				<template v-for="value in list">
					<view class="fx">{{value}}</view>
				</template>
				<view class="selectN"></view>
				<view class="selectN filter"></view>
			</view>
		</view>
		<scroll-view style="height:100px;" scroll-y @scroll="handle">
			<view style="height: 300px;">
				1111111
			</view>
		</scroll-view>
		<view>
			{{dev}}
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue';
const list=ref(['-','-',1,2,3,4,5,6,7,8,9,'-','-']);
const dev=ref(null);
console.log=(value)=>{dev.value=value}
console.log(1111)
const handle=(e)=>{
	console.log(e.detail);
}
</script>

<style scoped>
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
</style>
