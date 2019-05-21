<template>
	<view class="content">
		<view @click="aaa">
			<text class="title">{{title}}</text>
		</view>
		<show-modal></show-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '点我点我'
			}
		},
		onLoad() {

		},
		methods: {
			aaa(){
				this.$showModal({
				  title: '触发确定',
				  content: '我没有标题',
				  showCancel:true,
				  success(res) {
					if (res.confirm) {
					 wx.showToast({
					 	title: '点击了确定',
					 	icon: 'none',
					 	duration: 90000
					 })
					} else if (res.cancel) {
					  console.log('用户点击取消')
					}
				  }
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		font-size: 30px;
	}
</style>
