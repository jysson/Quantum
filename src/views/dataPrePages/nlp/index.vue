<template>
	<div class="nlp">
		<QTextarea></QTextarea>
		<div class="app-body">
			<Sidebar :data='nlpData'/>
			<main class="main">
				<div class="container-fluid">
					<router-view></router-view>
				</div>
			</main>
			<AppAside/>
		</div>
	</div>
</template>

<script>
	import QTextarea from '@/components/dataPre/QTextarea'
	import Sidebar from '@/components/Sidebar'
	import AppAside from '@/components/Aside'
	export default {
		name: 'nlp',
		data() {
			return {
				nlpData: [{
					name: '基础应用',
					path: '/nlpBase',
					children: [{
						name: '分词&词性分析',
						path: '/overview-analysis'
					},{
						name: '词频统计',
						path: '/overview-frequency'
					},{
						name: '实体识别',
						path: '/overview-ner'
					}]
				},{
					name: '句法应用',
					path: '/sentence',
					children: [{
						name: '依存句法',
						path: '/overview-dependency'
					},{
						name: '情感评估',
						path: '/overview-emotion'
					}]
				},{
					name: '篇章应用',
					path: '/chapter',
					children: [{
						name: '摘要提取',
						path: '/overview-digest'
					},{
						name: '关键词提取',
						path: '/overview-key'
					},{
						name: '观点提取',
						path: '/overview-viewpoint'
					}]
				},{
					name: '语义应用',
					path: '/semantics',
					children: [{
						name: '语义标签',
						path: '/overview-tag'
					},{
						name: '语义联想',
						path: '/overview-semantic'
					}]
				}]
			};
		},
		components: {
			QTextarea,
			Sidebar,
			AppAside
		}
	}
</script>

<style>

</style>
