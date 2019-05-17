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
				  title: '提示',
				  content: '这是一个模态弹窗',
				  success(res) {
					if (res.confirm) {
					  console.log('用户点击确定')
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
