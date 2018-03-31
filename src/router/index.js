import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Shome',
			component: resolve => {
				require (['@/components/student/Shome'], resolve)
			}
		},
		{
			path: '/header',
			name: 'Header',
			component: resolve => {
				require (['@/components/common/header'], resolve)
			}
		},
		{
			path: '/home',
			name: 'Home',
			component: resolve => {
				require (['@/components/common/home'], resolve)
			}
		},
		{
			path: '/sideBar',
			name: 'Sidebar',
			component: resolve => {
				require (['@/components/common/sideBar'], resolve)
			}
		}
	]
})



