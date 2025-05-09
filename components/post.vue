<template>
	<view class="post">
		<view class="avatar"><image src="/static/resource/kirisaki.jpg"></image></view>
		<view class="main">
			<view class="head">
				<view class="name">kirisaki</view>
				<view class="dot"></view>
				<view class="ago">&nbsp; • &nbsp;一天</view>
			</view>
			<view class="content">随便输入的内容阿八八八啊八八八八八八八八啊八八八八八八八八啊八八八八八八八八</view>
			<view class="pic">
				<image mode="widthFix" src="/static/resource/girl.png"></image>
			</view>
			<view class="others">
				<view class="data comments">
					<view class="ico"><image mode="aspectFit" src="/static/resource/comment.png"></image></view>
					<view class="number">29</view>
				</view>
				<view class="data likes">
					<view class="ico"><image mode="aspectFit" src="/static/resource/like.png"></image></view>
					<view class="number">38</view>
				</view>
				<view class="data collection">
					<view class="ico"><image mode="aspectFit" src="/static/resource/colloction.png"></image></view>
					<view class="number">16</view>
				</view>
				<view class="data views">
					<view class="ico"><image mode="aspectFit" src="/static/resource/view.png"></image></view>
					<view class="number">503</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.post{
		width: 100vw;
		height: auto;
		position: relative;
		border-bottom: 1px solid #00000017;
		/* background-color: aquamarine; */
		/* overflow: hidden; */
		padding-top: 10px;
	}
	.avatar{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		overflow: hidden;
		position: absolute;
		left: 1%;
		top:15px;
	}
	.avatar image{
		width: 100%;
		height:100%;
	}
	.main{
		height: auto;
		width: 280px;
		position: relative;
		top: 0;
		left: 20%;
		/* background-color: aqua; */
	}
	.head{
		width: 100%;
		box-sizing: border-box;
		display:flex;
		padding-left: 4px;
		align-items: baseline;
	}
	.name{
		font-size: 30px;
		font-weight: 600;
	}
	.dot{
		display: none;
		/* background-color: black;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		font-weight: 600; */
	}
	.ago{
		color:#9C9C9C;
		font-size: 16px;
		font-weight: 900;
	}
	.content{
		box-sizing: border-box;
		padding-left: 3px;
		padding-right: 3px;
		font-size: 21px;
	}
	.content::after{
		content:'...';
	}
	.pic{
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-top: 4px;
		border-radius: 8px;
		background-color: #9C9C9C17;
	}
	.pic image{
		width: 100%;
		padding: 0;
	}
	.others{
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.others .data{
		width: 60px;
		display: flex;
		align-items: center;
	}
	.data .ico{
		width: 20px;
		height: 30px;
		position: relative;
		/* top:5px; */
		margin-right: 5px;
	}
	.collection .ico{
		transform: scale(0.8,0.8);
	}
	.ico image{
		width: 100%;
		height: 100%;
	}
</style>