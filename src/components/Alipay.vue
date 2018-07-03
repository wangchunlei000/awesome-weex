<template>
  <div class="wrapper">
    <div class="title_bar">
      <text>{{title}}</text>
      <image class="back_icon" :src="back_icon" resize="contain"/>
    </div>
    <scroller class="scroller">
      <div class="content">
        <image class="top_logo" :src="topLogo"/>
        <div class="introduction">
          <image class="intro_image" :src="divFrame"/>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { loadImage } from "../util/ImageLoader";
export default {
  data() {
    return {
      title: "赏金任务",
      back_icon: loadImage("back_icon.png"),
      topLogo: loadImage("alipay_top.png"),
      divFrame: loadImage("div_frame.png")
    };
  }
};
</script>

<style>
.wrapper {
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: #fe751a */
  background-image: linear-gradient(to right, #ff7200, #ffa614);
  justify-content: flex-start;
}

.title_bar {
  width: 750px;
  height: 110px;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.back_icon {
  width: 50px;
  height: 100px;
  position: absolute;
  left: 30px;
}
.scroller {
  /* width: 750px; */
  flex: 1;
}
.content {
  flex: 1;
  width: 750px;
  align-items: center;
}
.top_logo {
  width: 700px;
  height: 440px;
  margin-left: 30px;
  align-self: flex-end;
}
.introduction {
  width: 670px;
  height: 130px;
}

.intro_image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
