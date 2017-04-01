import Vue from 'vue'
import Router from 'vue-router'
const IndexPage = resolve => require(['@/components/Index'], resolve)
const Register = resolve => require(['@/components/Register'], resolve)
const RegisterDone = resolve => require(['@/components/RegisterDone'], resolve)
const Login = resolve => require(['@/components/Login'], resolve)
const NotFound = resolve => require(['@/components/404'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: IndexPage },
    { path: '/register', name: 'Register', component: Register },
    { path: '/register-done', name: 'RegisterDone', component: RegisterDone },
    { path: '/login', name: 'Login', component: Login },
    { path: '*', name: '404', component: NotFound }
  ]
})
