<template>
	<div id="demo">
		<el-row :gutter="10">
			<el-col :span='12'>
				<el-radio-group v-model="lan1" disabled size='medium'>
					<el-radio-button label="zh">中文</el-radio-button>
					<el-radio-button label="en">英文</el-radio-button>
					<el-radio-button label="jp">日语</el-radio-button>
				</el-radio-group>
				 <i-input type="textarea" 
				 :rows="5"
				 :value.sync="text1"
				 placeholder="请输入..."></i-input>
			</el-col>
			<el-col :span='12'>
				<el-radio-group v-model="lan2" size='medium' @change='lanChange'>
					<el-radio-button label="zh">中文</el-radio-button>
					<el-radio-button label="en">英文</el-radio-button>
					<el-radio-button label="jp">日语</el-radio-button>
				</el-radio-group>
				<i-input type="textarea" 
				:rows="5"
				:value.sync="text2"
				placeholder="转换文字..."></i-input>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'demo',
		data() {
			return {
				text1: '特朗普表示，我重视同习近平主席的良好关系，愿通过习近平主席向中国人民致以良好的祝愿。两国元首经常直接沟通非常重要，我们要保持经常联系',
				text2: '',
				lan1: 'zh',
				lan2: ''
			};
		},
		methods: {
			lanChange() {
				this.$https('/translate',{
					source: this.text1,
					lang: this.lan2
				}, 'post').then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc(res) {
				this.text2 = res.translate
			}
		}
	}
</script>

<style>

</style>
