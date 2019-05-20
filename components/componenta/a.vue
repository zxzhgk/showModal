<template>
	<div>
		<!-- 我是a组件 -->
		<slot :user="user">{{user.name}}</slot>
		<!-- <div>
			我是props: {{fromindex}}
		</div> -->
	</div>
</template>

<script>
	export default {
		props:["fromindex"],
		data() {
			return {
				aData:"我是a.vue中的数据",
				user:{
					name:"张三",
					age:18
				}
			}
		},
		components:{
			
		},
		onLoad() {
	
		},
		methods: {

	
		}
	}
</script>

<style>
</style>
