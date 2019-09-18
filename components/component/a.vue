<template>
	<div>
		<div @click="send" class="a-componet">A组件发送数据</div>
	</div>
</template>

<script>
	export default {
		props:["fromindex"],
		data() {
			return {
				aData:"我是a.vue组件中的数据",
			}
		},
		components:{
			
		},
		onLoad() {
	
		},
		methods: {
			send(){
				this.$bus.$emit("bus-com-a",this.aData);
			}
		}
	}
</script>

<style scoped>
	.a-componet{
		background: #2C405A;
		color: #fff;
	}
</style>
