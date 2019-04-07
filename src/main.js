import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入 ant-design 组件
import {Layout, Calendar, Icon} from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


Vue.config.productionTip = false
Vue.use(Layout)
Vue.use(Calendar)
Vue.use(Icon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
