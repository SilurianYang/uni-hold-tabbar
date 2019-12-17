import {eventBind} from '../config/base'

/**
 * 根据坐标获得点击的位置 并传入到开发者声明的回调函数中
 */
const xyTransformTo=function({pageX},tabList,callBack){
	const {length}=tabList;
	const screenWidth=plus.screen.resolutionWidth;
	const single=(screenWidth/length).toFixed(4);
	const index= Math.ceil(pageX.toFixed(4)/single)-1;
	callBack(index,tabList[index]);
}

/**
 * 绑定一些指定的事件
 * @param {Object} event 事假json对象
 * @param {Object} view 当前底部的tabbar遮罩层
 */
export const initAddEvents=function(event,view,tabList){
	for(let key in event){
		const callBack=event[key];
		view.addEventListener(eventBind[key],(e)=>{
			xyTransformTo(e,tabList,callBack);
		})
	}
}