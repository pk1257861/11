import Vue from 'vue'
import App from './App.vue'

//全局引入样式
import  './assets/statics/site/css/style.css'

//路由
import VueRouter from "vue-router"
Vue.use(VueRouter)

//导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'

//规则
let routes=[
  {
    path:'/',
    component:index
},
{
  path:'/index',
  component:index
},{
  path:'/cart',
  component:cart
}
]

let router =new VueRouter({
  routes
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
