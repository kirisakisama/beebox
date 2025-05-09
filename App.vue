<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	uni.preloadPage({url: "/pages/index/index"});
	uni.preloadPage({url: "/pages/forum/forum"});
	uni.preloadPage({url: "/pages/agent/agent"});
</script>
<style>
	/*每个页面公共css */
	view{
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	}
</style>
