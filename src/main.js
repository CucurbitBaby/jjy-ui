import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// jjy-ui components

import JlButton from '@/components/JlButton'
Vue.use(JlButton)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
