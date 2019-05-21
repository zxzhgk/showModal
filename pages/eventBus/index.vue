<template>
	<div>
		<com-a></com-a>
		<com-b></com-b>
	</div>
</template>

<script>
import comA from "../../components/componenta/a.vue"
import comB from "../../components/componentb/b.vue"
export default {
	data() {
		return {
			
		}
	},
	components:{
		"com-a":comA,
		"com-b":comB
	},
	onLoad() {

	},
	methods: {
		
	},
	mounted(){
		this.$bus.$on("bus-com-a",data=>{
			console.log(data)
		})
		this.$bus.$on("bus-com-b",data=>{
			console.log(data)
		})
	}
}
</script>

<style lang="scss" scoped>

</style>
