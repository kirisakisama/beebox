<template>
	<view class="card1">
		<web-view src="../../static/html/card4/card4.html"
		class="wv"
		:fullscreen="false"
		:webview-styles="wvStyle">
		</web-view>
		<beeTarbarVue class="TarBar"></beeTarbarVue>
	</view>
</template>

<script setup lang="ts">
import {reactive, ref, onMounted} from 'vue';
import beeTarbarVue from '../../components/beeTarbar.vue';
const wvStyle=reactive({
	width:'100%',
	height:'80%',
	top:'80px',
	background:"transparent",
	scrollIndicator:"none",
	zindex:100,
	userSelect:false
});
// onMounted(() => {
//   var pages = getCurrentPages();  
//   var page = pages[pages.length - 1];  
//   // #ifdef APP-PLUS  
//   var currentWebview = page.$getAppWebview();  
//   currentWebview.setStyle({zindex:-100})
//   // #endif
// });
</script>

<style scoped>
	.card1{
		height:calc(100vh);
		box-sizing: border-box;
		position: relative;
		overflow:hidden;
	}
	.TarBar{
		position: absolute;
		z-index: 9;
		bottom: 0px;
		display: none;
	}
</style>
