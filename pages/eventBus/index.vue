<template>
	<div>
		<div class="foo" @click="bindEvent">开始接受其他组件的值</div>
		<div>{{busData}}</div>
		<com-a></com-a>
		<com-b></com-b>
	</div>
</template>

<script>
import comA from "../../components/component/a.vue"
import comB from "../../components/component/b.vue"
export default {
	data() {
		return {
			busData:""
		}
	},
	components:{
		comA,
		comB
	},
	onLoad() {

	},
	methods: {
		bindEvent(){
			this.$bus.$on("bus-com-a",data=>{
				this.busData=data;
			})
			this.$bus.$on("bus-com-b",data=>{
				this.busData=data;
			})
		}
	},
	mounted(){
		
	}
}
</script>

<style lang="scss" scoped>
	.foo{
		background: red;
		color: #fff;
	}
</style>
