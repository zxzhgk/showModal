<template>
	<div class="content">
		<com-a></com-a>
		<com-b></com-b>
		<com-a>
			<div @click="aaa">插槽包含html元素和组件：</div>
			<com-b></com-b>
		</com-a>
		<com-a>{{indexData}}</com-a>
		<com-a staticdata="staticdata" :fromindex="aProps">

		</com-a> 
		<com-a>
			<template v-slot:default="slotProps">
				{{ slotProps.user.age }}
			</template>
		</com-a>
		<show-modal></show-modal>
	</div>
</template>

<script>
import comA from "../../components/componenta/a.vue"
import comB from "../../components/componentb/b.vue"
export default {
	data() {
		return {
			title: '点我点我',
			indexData:"我是index.vue中的数据",
			aProps:"我是来自index的props"
		}
	},
	components:{
		"com-a":comA,
		"com-b":comB
	},
	onLoad() {

	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
	.content {
		// text-align: center;
		text-indent: 30upx;
		height: 400upx;
		font-size: 26upx;
	}
</style>
