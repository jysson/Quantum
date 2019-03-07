<template>
	<div class="nlpMain">
		<el-row 
		style='margin-top: 20px;'>
			<el-col :span='6'>
				<el-card>
					<el-tree
					  :data="data"
					  :props="defaultProps"
					  accordion
					  @node-click="handleNodeClick">
					</el-tree>
				</el-card>
			</el-col>
			
			<el-col :span='18' style='padding-left: 20px;'>
				<el-card>
					<router-view></router-view>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'nlpMain',
		data() {
			return {
				
			};
		},
		props: {
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			data: Array
		},
		methods: {
			handleNodeClick(data) {
				if(data.path) {
					this.$router.push(data.path)
				}
				
			}
		}
	}
</script>

<style>
	
</style>
