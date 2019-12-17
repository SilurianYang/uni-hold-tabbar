import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import HoldTabbar  from '@/common/HoldTabbar/index'

new HoldTabbar({
	event:{
		click:(index,{pagePath})=>{
			uni.switchTab({
				url:`/${pagePath}`
			})
		},	
	}
});

const app = new Vue({
    ...App
})
app.$mount()
