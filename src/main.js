import Vue from 'vue'
import App from './App.vue'


//饿了么ui导入
//导入模块 
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI)

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
import userContainer from './components/userContainer'
import userIndex from './components/userIndex'
import userOrder from './components/userOrder'
import userDetail from './components/userDetail'

//设置全局过滤器
import moment from 'moment'
Vue.filter('globlaFormatTime',function (value,fmtTemplate) {
  if (fmtTemplate) {
    return moment(value).format(fmtTemplate)
  }else{
    return moment(value).format("YYYY-MM-DD")
  }
})

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
},{
  path:'/user',
  component:userContainer,
   
  children:[
    {
      path:'Index',
    component:userIndex
    },
    {
      path:'Order',
    component:userOrder
    },
    {
      path:'Detail',
    component:userDetail
    },
    
  ]
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
