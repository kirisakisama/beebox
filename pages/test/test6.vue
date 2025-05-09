<template>
	<view>
		<view>dadadadwa</view>
		<view>{{ok}}</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const ok = ref("00000000");
	let sendUrl = "https://api.deepseek.com/chat/completions"
	let headers = {
		"Authorization": "Bearer sk-c8f12eb2625149e494c63c59a6dca88d",
		"Content-type": "application/json",
	}
	let body = {
		"model": "deepseek-chat",
		"messages": [{
				"role": "system",
				"content": "You are a helpful assistant."
			},
			{
				"role": "user",
				"content": "Hello!"
			}
		],
		"stream": true
	}
	const sseModule = uni.requireNativePlugin("yj-ssemodule");
	//发送sse
	sseModule.open({
		'url': sendUrl,
		'method': 'post',
		'headers': headers,
		'body': body
	}, e => {
		try{
			let s=JSON.parse(e.result);
			console.log("返回流：", s.choices[0].delta.content)
		}catch{
			
		}
	})
	//关闭sse
	sseModule.close({}, e => {
		console.log("关闭流：", e)
	})
</script>

<style>

</style>