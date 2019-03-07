export default [
	{
		//翻译
		path: '/translate',
		name: 'translate',
		component: (resolve) => require(['@/views/dataPrePages/translate.vue'], resolve)
	},
	{
		//nlp
		path: '/nlp',
		name: 'nlp',
		component: (resolve) => require(['@/views/dataPrePages/nlp/index.vue'], resolve),
// 		children: [{
// 			path: '/nlpBase',
// 			name: 'nlpBase',
// 			component: (resolve) => require(['@/views/dataPrePages/nlp/base.vue'], resolve)
// 		}
// 		{
// 			path: '/sentence',
// 			name: 'sentence',
// 			component: (resolve) => require(['@/pages/dataPre/sentence.vue'], resolve)
// 		},{
// 			path: '/chapter',
// 			name: 'chapter',
// 			component: (resolve) => require(['@/pages/dataPre/chapter.vue'], resolve)
// 		},{
// 			path: '/semantics',
// 			name: 'semantics',
// 			component: (resolve) => require(['@/pages/dataPre/semantics.vue'], resolve)
// 		}
		// ]
	},
	{
		//w2v
		path: '/wtv',
		name: 'wtv',
		component: (resolve) => require(['@/views/dataPrePages/wtv/index.vue'], resolve),
		// redirect: '/',
	}
	
]