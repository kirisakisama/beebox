<template>
	<view class="im">
		<!-- <iframe src="E:\nothings\uniapp\beeBox\static\html\lottie.html" frameborder="0"></iframe> -->
		<web-view class="wv" :fullscreen="false" :webview-styles="style" src="\static\html\lottie.html"></web-view>
	</view>
	<!-- <lottieVue class="ll" :resourceJson="resourceJson"></lottieVue> -->
</template>
<script setup>
//https://cdn.lottielab.com/l/6Qz1sREFDFLdVT.html
// import lottieVue from '../../components/lottieApp.nvue';
// import resourceJson from '../../static/lottie/Artboard 1.json';
// console.log(resourceJson)
import {ref} from 'vue'
const style=ref({});
style.value.width="100px";
style.value.height="100px";
</script>
<style scoped>
	.im{
		width: 90vw;
		height: 90vh;
		overflow: hidden;
		background-color: aqua;
		margin: 100px;
		border: 3px solid #765574;
	}
	iframe{
		width: 100%;
		height: 100%;
		transform: scale(3.5);
	}
	.ll{
		width: 200px;
		height: 200px;
	}
	.wv{
		width: 100px;
		height: 100px;
		background-color: aquamarine;
	}
</style>