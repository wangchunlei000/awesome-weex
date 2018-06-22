/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Image from '@/components/image'
import Slider from '@/components/slider'
import Input from '@/components/input'

Vue.use(Router);

module.exports = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/image',
            name: 'Image',
            component: Image
        },
        {
            path: '/slider',
            name: 'Slider',
            component: Slider
        },
        {
            path: '/input',
            name: 'Input',
            component: Input
        }
    ]
});
