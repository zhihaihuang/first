import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource' 
import seller from './components/seller.vue'
import ratings from './components/ratings.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(VueResource)

//定义路由  （建议复制s）

const routes = [
  { path: '/seller', component: seller },
  { path: '/ratings', component: ratings },
  { path: '*', redirect: '/ratings' }
]

//实例化VueRouter
const router = new VueRouter({
  routes 
})


//挂载
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
