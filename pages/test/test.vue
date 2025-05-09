<template>
    <scroll-view class="elastic-container" bounces="true" scroll-y id="elasticContainer"  @touchstart="touchBeginHandle" @touchmove="touchMoveHandle" @touchend="touchEndHandle">
        <headSpringVue></headSpringVue>
		<view class="elastic-content"  id="elasticContent">
            <view class="">
                <h1 class="">弹性页面示例</h1>
                <p class="">
                    这是一个移动端弹性页面的示例，你可以上下滑动页面体验弹性效果。
                </p>
                <p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p>
				<p class="">
				    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
				</p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p><p class="">
                    你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。你可以上下滑动页面体验弹性效果。
                </p>
            </view>
        </view>
    </scroll-view>
</template>

<script setup>
import {ref,computed,getCurrentInstance,onMounted} from 'vue';
import headSpringVue from '../../components/head-spring.vue';
let DeltaY=ref(0);
let ScaledY=ref(1);
let startY = 0;
let isDragging = false;
let initialTranslateY = 0;
const instance = getCurrentInstance();
let Scroll={ScrollHeight:0,ScrollTop:0,ClientHeight:0};
// const getScroll=()=>{
// 	let query = uni.createSelectorQuery().in(instance.proxy);
// 	query.select('#elasticContainer')
// 	        .scrollOffset()
// 	        .exec((res) => {
// 				console.log(res[0]);
// 				Scroll.ScrollHeight= res[0].scrollHeight;
// 				Scroll.ScrollTop = res[0].scrollTop;
// 	        });
// 	query = uni.createSelectorQuery().in(instance.proxy);
// 	query
// 	  .select("#elasticContainer")
// 	  .boundingClientRect((data) => {
// 		  Scroll.ClientHeight=data.height;
// 	  })
// 	  .exec();
// 	  console.log(Scroll)
// 	return Scroll;
// }

// const getDeltaY=computed(()=>`translateY(${DeltaY.value}px)`);

// const touchBeginHandle=(e)=>{
// 	console.log("start",isDragging);
// 	startY = e.touches[0].clientY;
// 	isDragging = true;
//     initialTranslateY = DeltaY.value;
// }
// const touchMoveHandle=(e)=>{
// 	console.log(e)
// 	console.log("move",isDragging)
// 	if (isDragging) {
// 	const currentY = e.touches[0].clientY;
// 	const deltaY = currentY - startY;
// 	const scroll =getScroll();
// 	console.log(deltaY)
// 	//DeltaY.value=deltaY;
// 	//console.log(scroll)
// 	if (scroll.ScrollTop === 0 && deltaY > 0) {
// 	    const newTranslateY = initialTranslateY + deltaY * 0.5;
// 	    DeltaY.value=newTranslateY;
// 	} else if (Math.abs(scroll.ScrollHeight-scroll.ScrollTop-scroll.ClientHeight)<1 && deltaY < 0) {
// 	    const newTranslateY = initialTranslateY + deltaY * 0.5;
// 	    DeltaY.value=newTranslateY;
// 	    }
// 	}
// }
// const touchEndHandle=(e)=>{
// 	console.log(e)
// 	isDragging = false;
// 	DeltaY.value=0;
// 	ScaledY.value=1;
// 	console.log("end",isDragging)
// }
// onMounted(getScroll);
</script>

<style>
.elastic-container {
    position: relative;
    overflow: auto;
    height: 100vh;
}

.elastic-content {
    min-height: 80vh;
    /* transition: transform 0.2s ease-in-out; */
	transform: v-bind('getDeltaY');
}
</style>