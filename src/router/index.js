import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: resolve => require(['@/pages/IndexPage'], resolve)
  },
  {
    path: '/register',
    name: 'Register',
    component: resolve => require(['@/pages/Register'], resolve)
  },
  {
    path: '/register-done',
    name: 'RegisterDone',
    component: resolve => require(['@/pages/RegisterDone'], resolve)
  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/pages/Login'], resolve)
  },
  {
    path: '/blog-list',
    name: 'BlogList',
    component: resolve => require(['@/pages/BlogList'], resolve)
  },
  {
    path: '/blog-editor',
    name: 'BlogEditor',
    component: resolve => require(['@/pages/BlogEditor'], resolve)
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: resolve => require(['@/pages/BlogPage'], resolve)
  },
  {
    path: '/activity-apply',
    name: 'ActivityApply',
    component: resolve => require(['@/pages/ActivityApply'], resolve)
  },
  {
    path: '/device-apply',
    name: 'DeviceApply',
    component: resolve => require(['@/pages/DeviceApply'], resolve)
  },
  {
    path: '/apply-download',
    name: 'ActivityApplyDownload',
    component: resolve => require(['@/pages/ApplyDownload'], resolve)
  },
  {
    path: '/apply-query',
    name: 'ApplyQuery',
    component: resolve => require(['@/pages/ApplyQuery'], resolve)
  },
  {
    path: '/messageboard',
    name: 'MessageBoard',
    component: resolve => require(['@/pages/MessageBoard'], resolve)
  },
  {
    path: '*',
    name: '404',
    component: resolve => require(['@/pages/404'], resolve)
  }]
})
