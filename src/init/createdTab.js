import {initAddEvents} from './addEvent'

/**
 * 通过配置信息创建指定tabbar层
 */
const createdTab = function({
	id,
	style,
	beforeMount,
	finishMount,
	event
}={},tabList) {
	const  tabbarView = new plus.nativeObj.View(id,style);
	const isHold= beforeMount(tabbarView,tabList);
	if(!isHold){
		tabbarView.show();
		initAddEvents(event,tabbarView,tabList);
		finishMount(tabbarView,tabList);
		return tabbarView;
	}
}

export const init = function(config,tabList) {
	return createdTab(config,tabList);
}
