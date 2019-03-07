<template>
	<div class="QTextarea">
		<el-row>
			<i-input
			type="textarea"
			:rows="5"
			placeholder="请输入内容"
			:value.sync="textarea" @change='valueChange'>
			</i-input>
		</el-row>
		<el-row style='margin-top: 10px;text-align: right;'>
			<el-button type="primary">提交文本</el-button>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'QTextarea',
		data() {
			return {
				textarea: this.value
			};
		},
		props: {
			value: String
		},
		methods: {
			valueChange(value) {
				this.$emit('valueChange', value)
			}
		}
	}
</script>

<style>

</style>
