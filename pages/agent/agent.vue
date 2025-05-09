<template>
	<view class="agent">
		<infoVue ref="info"></infoVue>
		<headSpringVue></headSpringVue>
		<view class="head">
			<view class="avatar" @click="openInfo()">
				<image mode="aspectFit" src="/static/resource/kirisaki.jpg"></image>
			</view>
			<view class="title">ai助手</view>
			<view class="history">
				<image mode="aspectFit" src="/static/resource/history.png"></image>
			</view>
			<view class="newChat">
				<image mode="aspectFit" src="/static/resource/newChat.png"></image>
			</view>
			<view clsss="spring"></view>
		</view>
		<view class="chat" :show-scrollbar="false">
			<view class="chatMain">
				<template v-for="value in aiAgent.chats">
					<view class="user" v-if="value.role==='user'">{{value.msg}}</view>
					<view class="ai done" v-else-if="value.role==='ai'">
						<view class="load" v-if="!value.done">
							<view class="loader-grid">
								<template v-for="index in 9" :key="index">
									<view class="grid-item"></view>
								</template>
							</view>
						</view>
						<view class="content">{{value.msg}}</view>
						<view class="aiunder">
							<view class="item rebuild">
								<image mode="aspectFit" src="/static/resource/rebuild.png"></image>
							</view>
							<view class="item copy">
								<image mode="aspectFit" src="/static/resource/copy.png"></image>
							</view>
							<view class="item ailike">
								<image mode="aspectFit" src="/static/resource/ailike.png"></image>
							</view>
							<view class="item aiunlike">
								<image mode="aspectFit" src="/static/resource/aiunlike.png"></image>
							</view>
						</view>
					</view>
				</template>
				<!-- <view class="user">你好</view>
				<view class="ai done">
					<view class="content">你好！有什么可以帮到你的吗？</view>
					<view class="aiunder">
						<view class="item rebuild"><image mode="aspectFit" src="/static/resource/rebuild.png"></image></view>
						<view class="item copy"><image mode="aspectFit" src="/static/resource/copy.png"></image></view>
						<view class="item ailike"><image mode="aspectFit" src="/static/resource/ailike.png"></image></view>
						<view class="item aiunlike"><image mode="aspectFit" src="/static/resource/aiunlike.png"></image></view>
					</view>
				</view> -->
			</view>
			<view class="spring" style="width: 100vw;height: 110px;"></view>
		</view>
		<view :class="inputClass">
			<view class="input"><textarea maxlength=-1 auto-blur :focus="isFocus" auto-height :adjust-position="false"
					placeholder="你想知道什么？" @focus="inputFosus" @blur="inputBlur" v-model="inputText" /></view>
			<view class="under">
				<view class="options">
					<view class="item link">
						<view class="ico">
							<image mode="aspectFit" src="/static/resource/link.png"></image>
						</view>
					</view>
					<view class="item net">
						<view class="ico">
							<image mode="aspectFit" src="/static/resource/net.png"></image>
						</view>
					</view>
					<view class="item deduction">
						<view class="ico">
							<image mode="aspectFit" src="/static/resource/deduction.png"></image>
						</view>
					</view>
				</view>
				<view class="send" @touchstart.prevent @touchend="sendTo()">
					<image mode="aspectFit" src="/static/resource/send.png"></image>
				</view>
			</view>
		</view>
		<beeTarbarVue class="TarBar"></beeTarbarVue>
	</view>
</template>

<script setup lang="ts">
	import beeTarbarVue from '../../components/beeTarbar.vue';
	import headSpringVue from '../../components/head-spring.vue';
	import infoVue from '../../components/info.vue';
	import { agent, chat } from '../../components/agent';
	import { ref, reactive, onMounted, computed } from 'vue';

	let initChat : chat[] = [
		{
			role: "system",
			msg: "你是一个养蜂助手，帮助用户解决问题",
			done: true
		}
	]
	const aiAgent = reactive(new agent(initChat));

	const inputClass = reactive({ yourInput: true, focus: false });
	const isFocus = ref(false);
	const inputFosus = () => {
		isFocus.value = true;
		inputClass.focus = true;
	}
	const inputBlur = () => {
		isFocus.value = false;
		inputClass.focus = false;
	}

	const info = ref(null);
	const openInfo = () => {
		info.value.changeState();
	}

	const inputText = ref<string>('');

	const sendColor = computed(() => {
		if (inputText.value.length > 0) return '#4834d4';
		else return '#00000042';
	});

	const sendTo = () => {
		// aiAgent.streamSend(inputText.value).then(Response => {
		// 	//console.log(Response);
		// })
		aiAgent.mystreamSend(inputText.value);
		inputText.value = "";
		inputBlur();
	}
</script>

<style scoped>
	.agent {
		width: 100vw;
		height: calc(100vh);
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
	}

	.head {
		width: 100%;
		position: relative;
		display: flex;
		/* background-color: aqua; */
		border-bottom: 1px solid #00000017;
	}

	.avatar {
		width: 50px;
		height: 50px;
		min-width: 50px;
		min-height: 50px;
		border-radius: 50%;
		overflow: hidden;
		margin: 10px;
	}

	.avatar image {
		width: 100%;
		height: 100%;
	}

	.title {
		position: absolute;
		top: 10%;
		left: 20%;
		right: 20%;
		bottom: 10%;
		text-align: center;
		font-size: 30px;
		font-weight: 400;
		/* background-color: aqua; */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.history {
		position: absolute;
		width: 60px;
		top: 30%;
		bottom: 30%;
		right: 50px;
	}

	.newChat {
		position: absolute;
		width: 60px;
		top: 30%;
		bottom: 30%;
		right: 0px;
	}

	.history image {
		width: 100%;
		height: 100%;
	}

	.newChat image {
		width: 100%;
		height: 100%;
	}

	.chat {
		width: 100%;
		height: 83vh;
		overflow-y: auto;
	}

	.chat::-webkit-scrollbar {
		display: none;
	}

	.chatMain {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 10px;
		padding-top: 20px;
		display: flex;
		flex-direction: column;
	}

	.user {
		max-width: 60%;
		align-self: flex-end;
		background-color: #E6E6E6;
		padding: 10px;
		border-radius: 15px;
		margin-bottom: 20px;
	}

	.ai {
		width: 94%;
		height: auto;
		margin-bottom: 20px;
		margin-left: 6px;
	}

	.ai .content {
		width: 100%;
	}

	.ai .load {
		width: 20px;
		height: 20px;
		margin: 5px;
	}

	.ai .aiunder {
		width: 200px;
		display: flex;
		margin-top: 10px;
	}

	.ai.undone .aiunder {
		display: none;
	}

	.aiunder .item {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		margin-right: 20px;
	}

	.aiunder .item image {
		height: 80%;
		width: 80%;
	}

	.yourInput {
		width: 94%;
		height: auto;
		box-sizing: border-box;
		padding: 15px;
		border-radius: 10px;
		background-color: #F2F2F2;
		position: absolute;
		bottom: 60px;
		left: 3%;
		right: 3%;
		transition: bottom 0.1s ease-in-out;
	}

	.yourInput.focus {
		bottom: calc(40vh);
	}

	.input {
		width: 100%;
		height: auto;
		margin-bottom: 20px;
	}

	.input textarea {
		font-size: 20px;
		width: 100%;
		max-height: 80px;
		overflow: auto;
	}

	.under {
		width: 100%;
		height: 30px;
		display: flex;
	}

	.options {
		width: 120px;
		display: flex;
		justify-content: space-between;
	}

	.options .item {
		width: 25px;
		height: 25px;
	}

	.ico {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 1px solid #00000042;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ico image {
		width: 90%;
		height: 90%;
	}

	.send {
		width: 30px;
		height: 30px;
		min-width: 30px;
		min-height: 30px;
		border-radius: 50%;
		border: 1px solid #00000042;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 30px;
		/* background-color: #00000042; */
		background-color: v-bind(sendColor);
	}

	.send image {
		width: 80%;
		height: 80%;
	}

	.TarBar {
		position: absolute;
		z-index: 7;
		bottom: 0px;
	}


	.load {
		position: relative;
		width: 30px;
		height: 30px;
		min-width: 30px;
		min-height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loader-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 8px;
		width: 100%;
		height: 100%;
	}

	.grid-item {
		width: 100%;
		height: 100%;
		background-color: #4a90e2;
		border-radius: 4px;
		opacity: 0.3;
		transform: scale(0.5);
		box-shadow: 0 0 0 rgba(74, 144, 226, 0);
		animation: grid-pulse 2s ease-in-out infinite alternate forwards;
	}

	.grid-item:nth-child(1) {
		animation-delay: 0s;
	}

	.grid-item:nth-child(2) {
		animation-delay: 0.05s;
	}

	.grid-item:nth-child(3) {
		animation-delay: 0.1s;
	}

	.grid-item:nth-child(4) {
		animation-delay: 0.15s;
	}

	.grid-item:nth-child(5) {
		animation-delay: 0.2s;
	}

	.grid-item:nth-child(6) {
		animation-delay: 0.25s;
	}

	.grid-item:nth-child(7) {
		animation-delay: 0.3s;
	}

	.grid-item:nth-child(8) {
		animation-delay: 0.35s;
	}

	.grid-item:nth-child(9) {
		animation-delay: 0.4s;
	}

	.grid-item:nth-child(10) {
		animation-delay: 0.45s;
	}

	.grid-item:nth-child(11) {
		animation-delay: 0.5s;
	}

	.grid-item:nth-child(12) {
		animation-delay: 0.55s;
	}

	.grid-item:nth-child(13) {
		animation-delay: 0.6s;
	}

	.grid-item:nth-child(14) {
		animation-delay: 0.65s;
	}

	.grid-item:nth-child(15) {
		animation-delay: 0.7s;
	}

	.grid-item:nth-child(16) {
		animation-delay: 0.75s;
	}

	.grid-item:nth-child(17) {
		animation-delay: 0.8s;
	}

	.grid-item:nth-child(18) {
		animation-delay: 0.85s;
	}

	.grid-item:nth-child(19) {
		animation-delay: 0.9s;
	}

	.grid-item:nth-child(20) {
		animation-delay: 0.95s;
	}

	.grid-item:nth-child(21) {
		animation-delay: 1.0s;
	}

	.grid-item:nth-child(22) {
		animation-delay: 1.05s;
	}

	.grid-item:nth-child(23) {
		animation-delay: 1.1s;
	}

	.grid-item:nth-child(24) {
		animation-delay: 1.15s;
	}

	.grid-item:nth-child(25) {
		animation-delay: 1.2s;
	}

	.grid-item:nth-child(26) {
		animation-delay: 1.25s;
	}

	.grid-item:nth-child(27) {
		animation-delay: 1.3s;
	}

	.grid-item:nth-child(28) {
		animation-delay: 1.35s;
	}

	.grid-item:nth-child(29) {
		animation-delay: 1.4s;
	}

	.grid-item:nth-child(30) {
		animation-delay: 1.45s;
	}

	.grid-item:nth-child(31) {
		animation-delay: 1.5s;
	}

	.grid-item:nth-child(32) {
		animation-delay: 1.55s;
	}

	.grid-item:nth-child(33) {
		animation-delay: 1.6s;
	}

	.grid-item:nth-child(34) {
		animation-delay: 1.65s;
	}

	.grid-item:nth-child(35) {
		animation-delay: 1.7s;
	}

	.grid-item:nth-child(36) {
		animation-delay: 1.75s;
	}

	/* ... 如果是更大的网格，需要更多 nth-child 规则 ... */


	/* 定义关键帧动画 */
	@keyframes grid-pulse {

		0%,
		40% {
			/* 初始和中间偏前段状态：小、透明、无光晕 */
			opacity: 0.3;
			transform: scale(0.5);
			box-shadow: 0 0 0 rgba(74, 144, 226, 0);
		}

		50% {
			/* 脉冲最强状态：大、不透明、强光晕 */
			opacity: 1;
			transform: scale(1.1);
			/* 稍微放大超过原始尺寸 */
			box-shadow: 0 0 15px rgba(74, 144, 226, 0.8), 0 0 20px rgba(74, 144, 226, 0.6);
			/* 多层光晕 */
			background-color: #50e3c2;
			/* 脉冲时变个色，更酷炫 */
		}

		60%,
		100% {
			/* 脉冲后到结束状态：恢复小、透明、无光晕 */
			opacity: 0.3;
			transform: scale(0.5);
			box-shadow: 0 0 0 rgba(74, 144, 226, 0);
			background-color: #4a90e2;
			/* 恢复基础颜色 */
		}
	}
</style>