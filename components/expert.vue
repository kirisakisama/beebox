<template>
	<view class="expert">
		<view class="avatar"><image mode="aspectFit" src="/static/resource/slq.png"></image></view>
		<view class="main">
						<view class="name">神乐琪</view>
						<view class="title">胡蜂王者</view>
						<view class="descr">农业之国·吐夫的国王。
		表面温文尔雅的，看似是风度翩翩的好客之人，实际上是会笑眯眯说谎欺骗他人的巧言如簧者。神乐崎能够使用武装王铠变身为“胡蜂王者”，与“神·胡蜂”共同战斗。</view>
						<view class="assessment">
							<view class="star">★★★★☆</view>(128条评价)
						</view>
						<view class="button" hover-class="buttonHover">
							开始咨询
						</view>
					</view>
	</view>
</template>

<script lang="ts" setup>
</script>

<style scoped>
	.expert{
		display: flex;
		padding-bottom: 10px;
		border-bottom: 1px solid #00000017
	}
	.avatar{
		height: 60px;
		width: 60px;
		min-width: 60px;
		min-height: 60px;
		overflow: hidden;
		border-radius: 50%;
		background-color: aqua;
		margin: 10px;
	}
	.avatar image{
		width: 100%;
		height: 100%;
	}
	.main{
		margin-left: 5px;
		padding-top: 10px;
	}
	.main .name{
		font-size: 20px;
		font-weight: bold;
	}
	.main .title{
		color:#1da1f2;
		margin: 5px 0;
	}
	.main .assessment{
		display: flex;
		margin-top: 5px;
		margin-bottom: 10px;
	}
	.assessment .star{
		color: #f39c12;
		margin-right: 10px;
	}
	.button{
		width: 100px;
		height: 38px;
		color: aliceblue;
		font-size: 17px;
		font-weight: 900;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1da1f2;
		border-radius: 18px/50%;
	}
	.buttonHover{
		filter: grayscale(20%)
	}
</style>