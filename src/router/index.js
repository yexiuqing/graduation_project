import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Login',
      component: resolve => {
        require(['@/components/page/Login'], resolve)
      }
    },
    {
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
    // 忘记密码
    {
      path: '/forgetPass',
      name: 'ForgetPass',
      component: resolve => {
        require(['@/components/common/ForgetPass'], resolve)
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
          path: '/examLogin',
          name: 'OnlineExamLogin',
          component: resolve => {
            require(['@/components/student/OnlineExamLogin'], resolve)
          }
        }, {
          path: '/exam',
          name: 'OnlineExam',
          component: resolve => {
            require(['@/components/student/OnlineExam'], resolve)
          }
        }, {
          path: '/examDetail',
          name: 'OnlineExamDetail',
          component: resolve => {
            require(['@/components/student/OnlineExamDetail'], resolve)
          }
        }, {
          path: '/finishExam',
          name: 'FinishExam',
          component: resolve => {
            require(['@/components/student/FinishExam'], resolve)
          }
        }, {
          path: '/onlinePractice',
          name: 'OnlinePractice',
          component: resolve => {
            require(['@/components/student/OnlinePractice'], resolve)
          }
        }, {
          path: '/practice',
          name: 'OnlinePracticeText',
          component: resolve => {
            require(['@/components/student/OnlinePracticeText'], resolve)
          }
        }, {
          path: '/answer',
          name: 'OnlinePracticeAnswer',
          component: resolve => {
            require(['@/components/student/OnlinePracticeAnswer'], resolve)
          }
        }, {
          path: '/searchScore',
          name: 'SearchScore',
          component: resolve => {
            require(['@/components/student/SearchScore'], resolve)
          }
        }, {
          path: '/talkAbout',
          name: 'TalkAbout',
          component: resolve => {
            require(['@/components/student/TalkAbout'], resolve)
          }
        }, {
          path: '/addTalkAbout',
          name: 'AddTalkAbout',
          component: resolve => {
            require(['@/components/student/AddTalkAbout'], resolve)
          }
        },
        // 个人信息页
        {
          path: '/personalInfo',
          name: 'PersonalInfo',
          component: resolve => {
            require(['@/components/common/PersonalInfo'], resolve)
          }
        },
        // 修改个人信息
        {
          path: '/modifyInfo',
          name: 'ModifyInfo',
          component: resolve => {
            require(['@/components/common/ModifyInfo'], resolve)
          }
        },
        // 教师发布考试 
        {
          path: '/fabu',
          name: 'Fabu',
          component: resolve => {
            require(['@/components/teacher/Fabu'], resolve)
          }
        },
        // 题型设置
        {
          path: '/txSet',
          name: 'TixingSet',
          component: resolve => {
            require(['@/components/teacher/TixingSet'], resolve)
          }
        },
        // 学生名单
        {
          path: '/studentForm',
          name: 'StudentForm',
          component: resolve => {
            require(['@/components/teacher/studentForm'], resolve)
          }
        },
        // 组卷
        {
          path: '/zujuan',
          name: 'ZuJuan',
          component: resolve => {
            require(['@/components/teacher/ZuJuan'], resolve)
          }
        },
        // 组卷结果
        {
          path: '/zujuanResult',
          name: 'ZuJuanResult',
          component: resolve => {
            require(['@/components/teacher/ZuJuanResult'], resolve)
          }
        },
        // 教师查询成绩
        {
          path: '/tsearchScore',
          name: 'TeSearchScore',
          component: resolve => {
            require(['@/components/teacher/TeSearchScore'], resolve)
          }
        },
        // 综合题判分
        {
          path: '/panfen',
          name: 'Panfen',
          component: resolve => {
            require(['@/components/teacher/Panfen'], resolve)
          }
        },
        // 重难点分析
        {
          path: '/analyse',
          name: 'Analyse',
          component: resolve => {
            require(['@/components/teacher/Analyse'], resolve)
          }
        },
        // 管理首页
        {
          path: '/mHome',
          name: 'Mhome',
          component: resolve => {
            require(['@/components/management/Mhome'], resolve)
          }
        },
      ]
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
