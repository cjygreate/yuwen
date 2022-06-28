// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './view/Index'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.prototype.$axios = axios
Vue.use(VueAxios, axios) // 安装插件

Vue.config.productionTip = false
Vue.use(ElementUI)

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: { Index },
  template: '<Index/>'
})
