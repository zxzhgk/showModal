<template>
	<div class="center">
		<div class="list" @click="a">普通示例</div>
		<div class="list" @click="b">自定义示例</div>
		<show-modal>
			<template v-slot:title v-if="isCustom">
				<div>我是自定义的头部呀</div>
			</template>
			<template v-slot:content v-if="isCustom">
				<div>我是自定义的中间部分呀</div>
			</template>
		</show-modal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCustom:false
			}
		},
		components:{
			
		},
		onLoad() {
	
		},
		methods: {
			a(){
				this.isCustom=false;
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
			},
			b(){
				this.isCustom=true;
				this.$showModal({
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
