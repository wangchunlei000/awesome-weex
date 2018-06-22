<template>
    <div class="wrapper">
        <image class="image" src="https://vuejs.org/images/logo.png"
               resize="contain"
               ref="poster"
               @load="onImageLoad">
        </image>
        <text class="save" @click="saveImage">Save</text>
    </div>
</template>
<script>
    let modal = weex.requireModule('modal');

    module.exports = {
        data(){
            return {}
        },
        methods: {
            saveImage(){
                const $image = this.$refs.poster
                $image.save(result => {
                    modal.toast({
                        message: result.success,
                        duration: 0.1
                    });
                })
            },
            onImageLoad(event){
                let naturalHeight = event.size.naturalHeight;
                let naturalWidth = event.size.naturalWidth;
                modal.toast({
                    message: `图片尺寸->${naturalHeight}*${naturalWidth}`,
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
        justify-content: center;
        align-items: center;
        background-color: lightblue;
    }

    .image {
        width: 500px;
        height: 500px;
    }

    .save {
        font-size: 60px;
        position: absolute;
        right: 30px;
        bottom: 30px;
        background-color: coral;
        color: white;
        padding-left: 25px;
        padding-right: 25px;
        border-color: #f5f5f5;
        border-width: 1px;
        border-radius: 15px;
    }
</style>