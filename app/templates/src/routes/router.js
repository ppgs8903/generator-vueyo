import Vue from 'vue';
import VueRouter from 'vue-router';

import appView from '../views/appView.vue'; //页面框架
import indexView from '../views/indexView.vue'; //主页

import notFoundView from '../views/notFoundView.vue'; //错误页面

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                default: appView,
            },
            children: [
                { path: '', component: indexView },
            ]
        },
        { path: '*', component: notFoundView }
    ]
})
