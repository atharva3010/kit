// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import Routes from './routes'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueResource)


Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
  
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
