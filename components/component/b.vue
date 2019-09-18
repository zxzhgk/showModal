<template>
	<div>
		<div @click="send">b组件发送数据</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bData:"我是b.vue组件中的数据",
			}
		},
		components:{
			
		},
		onLoad() {
	
		},
		methods: {
			send(){
				this.$bus.$emit("bus-com-b",this.bData);
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
</style>
