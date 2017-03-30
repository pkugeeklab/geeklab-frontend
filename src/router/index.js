import Vue from 'vue'
import Router from 'vue-router'
const IndexPage = resolve => require(['@/components/Index'], resolve)
const Register = resolve => require(['@/components/Register'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
