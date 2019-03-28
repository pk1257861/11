import Vue from 'vue'
import App from './App.vue'


//全局引入样式
import  './assets/statics/site/css/style.css'

import axios from "axios"
Vue.prototype.$axios=axios
axios.defaults.baseURL='http://111.230.232.110:8899'

//路由
import VueRouter from "vue-router"
Vue.use(VueRouter)

//导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
import detail1 from './components/detail1.vue'



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
},{
  path:'/detail/:id',
  component:detail
},{
  path:'/detail1/:id',
  component:detail1
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
