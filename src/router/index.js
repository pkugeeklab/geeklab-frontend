import Vue from 'vue'
import Router from 'vue-router'
const IndexPage = resolve => require(['@/pages/IndexPage'], resolve)
const Register = resolve => require(['@/pages/Register'], resolve)
const RegisterDone = resolve => require(['@/pages/RegisterDone'], resolve)
const Login = resolve => require(['@/pages/Login'], resolve)
const ActivityApply = resolve => require(['@/pages/ActivityApply'], resolve)
const MessageBoard = resolve => require(['@/pages/MessageBoard'], resolve)
const NotFound = resolve => require(['@/pages/404'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: IndexPage },
    { path: '/register', name: 'Register', component: Register },
    { path: '/register-done', name: 'RegisterDone', component: RegisterDone },
    { path: '/login', name: 'Login', component: Login },
    { path: '/activity-apply', name: 'ActivityApply', component: ActivityApply },
    { path: '/messageboard', name: 'MessageBoard', component: MessageBoard },
    { path: '*', name: '404', component: NotFound }
  ]
})
