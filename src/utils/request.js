// 异常抛出结合element进行提醒
// import Vue from 'vue';
// import { Message } from 'element-ui';
// Vue.component('Msg', Message);
import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';
// axios.defaults.headrs.post['Content-Type'] = 'application/x-www-form-urlencoded'

// http request 拦截器
axios.interceptors.request.use(
	config => {
		// 拦截成功
		// format Data头
		// config.data = JSON.stringify(config.data); //data转化成字符串
// 		config.headers = {
// 			'Content-Type': 'application/x-www-form-urlencoded'
// 		}; //设置头部
		
		// token拼接到地址上
// 		if(sesssion('token')) {
// 			config.url += '&token=' + session('token');
// 		}
		
		// 拦截前，可以做任何操作
		
		return config;
	},
	error => {
		// 抛出错误
		return Promise.reject(err);
	}
);

// 响应拦截器即异常抛出
axios.interceptors.response.use(
	response => {
		// 返回响应
		return response
	},
	err => {
		// 错误响应码
		if(err && err.response) {
			switch(err.response.status) {
				case 400:
					console.log('错误请求');
// 					Vue.prototype.$Msg({
// 						message: error.response.data.message || '请求参数异常',
// 						type: 'error'
// 					})
					break;
				case 401:
					console.log('未授权，请重新登录');
					break;
				case 403:
					console.log('拒绝访问');
					break;
				case 404:
					console.log('请求错误,未找到该资源');
					break;
				case 405:
					console.log('请求方法未允许');
					break;
				case 408:
					console.log('请求超时');
					break;
				case 500:
					console.log('服务器端出错');
					break;
				case 501:
					console.log('网络未实现');
					break;
				case 502:
					console.log('网络错误');
					break;
				case 503:
					console.log('服务不可用');
					break;
				case 504:
					console.log('网络超时');
					break;
				case 505:
					console.log('http版本不支持该请求');
					break;
				default:
					console.log(`连接错误${err.response.status}`);
			}
		}else {
			console.log('连接到服务器失败');
		}
		// 返回响应错误
		return Promise.resolve(err.response);
	}
);

/**
 * 二次封装axios方法
 * @param url
 * @param data
 * @returns { Promise }
 * 使用
 * 1、Main.js里面引用并注册全局
 * 	import { https } from '路径'
 * 	Vue.prototype.$https = https
 * 2、组件中使用
 * 	this.$https(url,params,method)
 */
export function https(url, params = {}, method = 'get') {
	return new Promise((resolve,reject) => {
		let obj = {
			url,
			method
		};
		switch(method) {
			case 'get':
				obj.params = params;
				break;
			case 'post':
			case 'put':
			case 'patch':
				obj.data = params;
				break;
		}
		axios(obj)
		.then(response => {
			resolve(response.data);
		}).catch(err => { 
			reject(err) 
		})
	})
}



// export const server = {
// 	exam: (url,params,method) => {
// 		return https(url, params, method);
// 	}
// }