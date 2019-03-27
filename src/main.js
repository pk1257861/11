import Vue from 'vue'
import App from './App.vue'

//全局引入样式
import style from './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
