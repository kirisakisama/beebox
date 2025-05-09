<template>
	<view class="lottie">
		<!-- <view>{{resourceJson}}</view> -->
		<LottieAnimation class="lottieAnimation"
		    :animation-data="resourceJson"
		    :auto-play="true"
		    :loop="true"
		    :speed="1"
		    ref="anim" />
		<view>{{resourceJson}}</view>
	</view>
</template>

<script setup lang="ts">
import {ref,onMounted,defineProps} from 'vue'
import { LottieAnimation } from "lottie-web-vue"
const props = defineProps<{
  resourceJson: any
}>()
let anim = ref()
const resourceJson=props.resourceJson;
onMounted(() => {
  setTimeout(() => {
  console.log(anim.value.goToAndPlay(150, true))
  anim.value
  }, 500)
  });
// console.log(resourceJson);
</script>

<style scoped>
	.lottie{
		width: 100px;
		height: 100px;
		overflow: hidden;
	}
	.lottieAnimation{
		width: 100%;
		height: 100%;
		transform: scale(3.5);
	}
</style>