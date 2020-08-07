<template>
	<div class="content">
		<div class="list" @click="toShowModal">弹层示例</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	components:{
		
	},
	onLoad() {

	},
	methods: {
		toShowModal(){
			wx.navigateTo({
				url:"../showModal/index"
			})
		},
		aaa(){
			this.$showModal({
			  title: '打到',
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

<style lang="scss" scoped>
	.content {
		text-align: center;
		height: 400upx;
		// font-size: 22px;
		.list{
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			text-indent: 30upx;
			font-size: 24upx;
			color: #666;
			text-align: left;
			border-bottom: 1px solid #dedede;
		}
		.list::last-child{
			border: none;
		}
	}
</style>
