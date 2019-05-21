<template>
	<div>
		<div>我是B组件</div>
		<div @click="send">b组件发送数据</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				bData:"我是b.vue中的数据",
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
			this.$bus.$on("bus-com-a",data=>{
				console.log("b组件中打印的："+data)
			})
		}
	}
</script>

<style>
</style>
