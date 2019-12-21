import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import HoldTabbar  from '@/common/uni-hold-tabbar-bundle.js'

Vue.prototype.$holdTab=new HoldTabbar({
	registerPageHook:true,
	// style:{
	// 	backgroundColor:'#FF0000',
	// 	opacity:1
	// },
	event:{
		click:(index,{pagePath},next)=>{
			uni.switchTab({
				url:`/${pagePath}`,
				complete() {
					next();
				}
			})
		},	
	}
});

const app = new Vue({
    ...App
})
app.$mount()
