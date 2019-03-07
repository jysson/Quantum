<template>
	<div class="wtv">
		<QTextarea></QTextarea>
		<div class="app-body">
			<Sidebar :data='wtvData'/>
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
		name: 'wtv',
		data() {
			return {
				wtvData: [{
					name: '量向词',
					path: '/wtv-ner'
				},{
					name: '语义扩展',
					path: '/wtv-semantic'
				},{
					name: '实体相似度',
					path: '/wtv-smiler'
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
