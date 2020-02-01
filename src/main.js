import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import { store } from './store/store';


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-app-81a73.firebaseio.com/';

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
