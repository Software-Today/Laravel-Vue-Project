require('./bootstrap');
   
window.Vue = require('vue');
import VueRouter from 'vue-router'
  
Vue.use(VueRouter)
   
const routes = [
  { path: '/', component: require('./components/Home.vue') },
  { path: '/user', component: require('./components/User.vue') }
]
  
const router = new VueRouter({
  routes 
})
  
const app = new Vue({
  router
}).$mount('#app')