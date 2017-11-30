// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import VueResource from 'vue-resource';
import '!style-loader!css-loader!sass-loader!./common/style/index.scss';

Vue.config.productionTip = false;
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#sell',
  router,
  components: { App }
});
