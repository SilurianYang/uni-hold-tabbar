import { BaseConfig } from '../config/base';
/**
 * 合并配置信息 
 * @param {Object} config 开发者传递的配置信息
 */
export const mergeConfig=function(config){
	const CONFIG={};
	for(let key in BaseConfig){
		const item =BaseConfig[key];
		if(config[key]==null){
			CONFIG[key]=item;
		}else if(config[key].constructor===Object){
			CONFIG[key]={...item,...config[key]}
		}else{
			CONFIG[key]=config[key];
		}
	}
	return CONFIG;
}
/**
 * 断言当前是否有 原生tabbar
 */
export const assertTabbar=function(){
	if(__uniConfig.tabBar&&__uniConfig.tabBar.list&&__uniConfig.tabBar.list.length>0){
		const list=JSON.parse(JSON.stringify(__uniConfig.tabBar.list));
		for(let i=0;i<list.length;i++){
			list[i].pagePath=list[i].pagePath.replace(/\.html$/,'');
		}
		return list;
	}else{
		console.error('当前没有uni-app自带的原生tabbar 无须进行拦截  告辞!!')
		return false
	}
}