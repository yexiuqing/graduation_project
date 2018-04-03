import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      name: 'Login',
      component: resolve => {
        require(['@/components/page/Login'], resolve)
      }
		},
		{
      path: '/registor',
      name: 'Registor',
      component: resolve => {
        require(['@/components/page/Registor'], resolve)
      }
    },
    {
      path: '/header',
      name: 'Header',
      component: resolve => {
        require(['@/components/common/Header'], resolve)
      }
    },
    {
      path: '/shome',
      name: 'Shome',
      component: resolve => {
        require(['@/components/student/Shome'], resolve)
      },
      children: [{
        path: '/onlineExam',
        name: 'OnlineExam',
        component: resolve => {
          require(['@/components/student/OnlineExam'], resolve)
        }
      }, {
				path: '/onlinePractice',
				name: 'OnlinePractice',
				component: resolve => {
          require(['@/components/student/OnlinePractice'], resolve)
        }
			}, {
				path: '/searchScore',
				name: 'SearchScore',
				component: resolve => {
          require(['@/components/student/SearchScore'], resolve)
        }
			}, {
				path: '/talkAbout',
				name: 'TalkAbout' ,
				component: resolve => {
          require(['@/components/student/TalkAbout'], resolve)
        }
			}]
    },
    {
      path: '/sideBar',
      name: 'Sidebar',
      component: resolve => {
        require(['@/components/common/Sidebar'], resolve)
      }
    }
  ]
})
