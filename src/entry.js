/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
const meta = weex.requireModule('meta')

// 配置 viewport 的宽度为 640px
meta.setViewport({
    width: 750
})

new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/gridlayout');

