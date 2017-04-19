import 'babel-polyfill';
import Vue from 'vue';
import store from './store/appStore';
import router from './routes/router';
import App from './views/appView.vue';

const app = new Vue({
  router,
  store,
  ...App
});

app.$mount('#app');
