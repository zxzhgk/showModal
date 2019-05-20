<template>
	<div class="center">
		<div class="list" @click="a">普通示例</div>
		<show-modal></show-modal>
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
			a(){
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
</script>

<style lang="scss" scoped>
	.center{
		.list{
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			text-indent: 30upx;
			font-size: 24upx;
			color: #666;
			border-bottom: 1px solid #dedede;
		}
		.list::last-child{
			border: none;
		}
	}
	
</style>
