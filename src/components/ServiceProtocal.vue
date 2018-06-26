<template>
    <div class="wrapper">
        <div class="title background_white">
            <text class="title_text">{{title}}</text>
            <image class="back_icon" :src="backIcon"/>
        </div>
        <div class="content">

        </div>
    </div>
</template>

<script>
    const imageLoader = require('../util/ImageLoader')
    export default {
        data(){
            return ({
                title: '服务协议',
                backIcon: imageLoader.loadImage('back_icon.png')
            });
        }
    }
</script>

<style>
    .wrapper {
        width: 750px;
        flex: 1;
        background-color: #f7f0f0;
    }

    .content {
        flex: 1;
        width: 750px;
    }

    .title {
        width: 750px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .back_icon {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 20px;
    }

    .center_vertical {
        justify-content: center;
    }

    .center_horizontal {
        align-items: center;
    }

    .background_white {
        background-color: white;
    }
</style>
