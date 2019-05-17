<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="uni-hello-text uni-common-pb" @click="showModal()">
			点我触发showModal
		</view>
		<show-modal></show-modal>
	</view>
</template>
<script>
export default {
	components: {
		
	},
	data() {
		return {
			
		}
	},
	methods: {
		showModal(){
			// 完整
			// this.$showModal({
			// 	title:"我是标题",
			// 	content:'我内容',
			// 	showCancel:true,
			// 	cancelText:"取消le",
			// 	cancelColor:"#000000",
			// 	confirmText:"确定la",
			// 	confirmColor:"red",
			// 	hideTabBar:true,
			// 	success:function(res){
			// 		if(res.confirm){
			// 			wx.showToast({
			// 				title: '点击了确定',
			// 				icon: 'none',
			// 				duration: 2000
			// 			})
			// 		}else{
			// 			wx.showToast({
			// 				title: '点击了取消',
			// 				icon: 'none',
			// 				duration: 2000
			// 			})
			// 		}
			// 	},
			// })
			
			// 部分
			this.$showModal({
				title:"我是标题",
				content:'我内容',
				showCancel:false,
				// cancelText:"取消le",
				// cancelColor:"#000000",
				// confirmText:"确定la",
				// confirmColor:"red",
				hideTabBar:true,
				success:function(res){
					if(res.confirm){
						wx.showToast({
							title: '点击了确定',
							icon: 'none',
							duration: 2000
						})
					}else{
						wx.showToast({
							title: '点击了取消',
							icon: 'none',
							duration: 2000
						})
					}
				},
			})
		}
	}	
}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
	}
</style>
