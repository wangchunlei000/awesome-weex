<template>
    <div class="wrapper">
        <div class="title background_white">
            <text class="title_text">{{title}}</text>
            <image class="back_icon" :src="backIcon"/>
        </div>
        <div class="content">
          <div class="list" v-for="(item,index) in list" :key="index">
            <div class="item" @click="onItemClick(item,$event)">
              <text class="font_gray font_16">{{item.title}}</text>
              <image class="right_arrow" :src="rightArrow"/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
// const imageLoader = require('../util/ImageLoader')
import { loadImage } from "../util/ImageLoader";
let modal = weex.requireModule("modal");
let navigator = weex.requireModule("navigator");
// const router = require("../router");
export default {
  data() {
    return {
      title: "服务协议",
      backIcon: loadImage("back_icon.png"),
      rightArrow: loadImage("right_arrow.png"),
      list: [
        {
          title: "点我达用户协议"
        },
        {
          title: "非全日制劳务合同"
        },
        {
          title: "个人信息授权书"
        },
        {
          title: "个人信息保护及隐私政策"
        }
      ]
    };
  },
  methods: {
    onItemClick(item, event) {
      console.log(item, event);
      if (item.title === "点我达用户协议") {
        modal.toast({
          message: "你点击了点我达用户协议",
          duration: 1
        });
        this.$router.push("/gridlayout");
      } else {
        modal.toast({
          message: "哥们，点错了！",
          duration: 1
        });
      }
    }
  }
};
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
  margin-top: 20px;
}

.item {
  flex-direction: row;
  /* justify-content: space-around; */
  align-items: center;
  background-color: white;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  padding-top: 40px;
  padding-left: 30px;
  padding-bottom: 40px;
}

.right_arrow {
  width: 48px;
  height: 48px;
  position: absolute;
  right: 20px;
}

.font_gray {
  color: #666666;
}

.font_16 {
  font-size: 32px;
}

.title {
  width: 750px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 36px;
  border-bottom-color: #e6e6e6;
  border-bottom-width: 1px;
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
