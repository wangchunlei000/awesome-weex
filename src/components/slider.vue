<template>
    <div class="wrapper">
        <slider class="slider"
                interval="3000" auto-play="true" @change="change">
            <div class="frame" v-for="img in imageList">
                <image class="image"
                       resize="cover"
                       :src="img.src">

                </image>
            </div>
            <indicator class="indicator"></indicator>
        </slider>
        <text class="text">123456</text>
    </div>
</template>

<script>
    let modal = weex.requireModule('modal');
    export default{
        data(){
            return {
                imageList: [
                    {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                    {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    {src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ]
            }
        },
        methods: {
            change(event){
                console.log(event);
                modal.toast({
                    message: event.index,
                    duration: 1
                });
            }
        }
    }

</script>
<style>
    .wrapper {
        flex: 1;
        width: 750px;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: lightgoldenrodyellow;
    }

    .indicator {
        width: 150px;
        height: 10px;
        item-color: green;
        item-selected-color: red;
        item-size: 20px;
        /*background-color: #afddff;*/
        position: absolute;
        right: 20px;
        bottom: 20px;
    }

    .image {
        width: 750px;
        height: 300px;
    }

    .slider {
        margin-top: 30px;
        width: 750px;
        height: 300px;
        border-width: 5px;
        border-style: solid;
        border-color: #41B883;
        border-radius: 20px;
        position: absolute;
        top: 0px;
    }

    .frame {
        width: 750px;
        height: 300px;
        position: relative;
    }

    .text {
        margin-top: 350px;
        width: 750px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 30px;
    }
</style>