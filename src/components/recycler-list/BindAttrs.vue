<template>
    <recycle-list for="(img,i) in images">
        <cell-slot :key="i">
            <div>
                <text class="title" :value="i">
                </text>
                <image class="image" :src="img.src"/>
            </div>
        </cell-slot>
    </recycle-list>
</template>

<script>
    const dataset = [
        {type: 'picture', src: '//gw.alicdn.com/imgextra/TB2uQAFhb_I8KJjy1XaXXbsxpXa_!!89-0-lubanu.jpg_q50.jpg'},
        {type: 'picture', src: '//img.alicdn.com/simba/img/TB19heYdwn.PuJjSZFkSuw_lpXa.jpg_q50.jpg'},
        {type: 'picture', src: '//aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'},
        {
            type: 'picture',
            src: '//img.alicdn.com/imgextra/i1/174/TB2xzb0eOqAXuNjy1XdXXaYcVXa_!!174-0-luban.jpg_q50.jpg'
        },
        {type: 'picture', src: '//gw.alicdn.com/imgextra/TB27XSvg6nD8KJjSspbXXbbEXXa_!!12-0-lubanu.jpg_q50.jpg'},
        {type: 'picture', src: '//gw.alicdn.com/imgextra/TB2cF.xfTnI8KJjSszbXXb4KFXa_!!112-0-lubanu.jpg_q50.jpg'},
        {type: 'picture', src: '//gw.alicdn.com/imgextra/TB2ZweVg9_I8KJjy0FoXXaFnVXa_!!158-0-lubanu.jpg_q50.jpg'},
        {type: 'picture', src: '//gw.alicdn.com/imgextra/TB2O_AKctHO8KJjSZFtXXchfXXa_!!53-0-lubanu.jpg_q50.jpg'}
    ];
    export default {
        data(){
            let N = 10;
            let images = [];
            while (N--) {
                images.push(...dataset);
            }

            return {
                images: images
            };
        }
    }
</script>

<style>
    .title {
        text-align: center;
        font-size: 40px;
        color: #888;
        padding: 10px;
        background-color: #EEE;
    }

    .image {
        width: 750px;
        height: 235px;
    }
</style>
