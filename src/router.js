/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Image from '@/components/image'
import Slider from '@/components/slider'
import Input from '@/components/input'
import List from '@/components/list'
import BindTextRecyclerList from '@/components/recycler-list/BindText'
import BindAttrsRecycleList from '@/components/recycler-list/BindAttrs'
import FlexBox from '@/components/FlexBox'
import GridLayout from '@/components/GridLayout'
import ServiceProtocal from '@/components/ServiceProtocal'

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
        },
        {
          path:'/list',
          name:'List',
          component:List
        },
        {
          path:'/recycler/bind-text',
          name:'BindTextRecyclerList',
          component:BindTextRecyclerList
        },
        {
          path:'/recycler/bind-attrs',
          name:'BindAttrsRecyclerList',
          component:BindAttrsRecycleList
        },
        {
          path:'/flexbox',
          name:'FlexBox',
          component:FlexBox
        },
        {
          path:'/gridlayout',
          name:'GridLayout',
          component:GridLayout
        },
        {
          path:'/service',
          name:'ServiceProtocal',
          component:ServiceProtocal
        }
    ]
});
