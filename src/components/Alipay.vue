<template>
  <div class="wrapper">
    <div class="title_bar">
      <text>{{title}}</text>
      <image class="back_icon" :src="back_icon" resize="contain"/>
    </div>
    <scroller class="scroller">
      <div class="content_panel">
        <!-- 顶部图片 -->
            <image class="top_logo" :src="topLogo"/>
            <!-- 业务介绍 -->
            <div class="biz_panel">
              <image class="intro_image  mt_15px" :src="divFrame"/>
              <div class="introduction">
                <div class="bizIntroduction mt_15px">
                  <image class="biz_line mr_15px" :src="lineYellow"/>
                  <text class="bigText whiteText pl_15px pr_15px ml_15px mr_15px">{{bizTitle}}</text>
                  <image class="biz_line ml_15px" :src="lineYellow"/>
                </div>
              <div class="content ml_15px mr_15px mt_15px">
                  <text class="content_font">{{bizIntroduction}}</text>
              </div>
              
            </div>
            <!-- 赚钱秘籍 -->
            <div class="centerHorizontal">
              <image class="biz_line mr_15px" :src="lineYellow"/>
                  <text class="bigText whiteText pl_15px pr_15px ml_15px mr_15px">{{bizTitle}}</text>
                  <image class="biz_line ml_15px" :src="lineYellow"/>
            </div>

            <!-- 马上去赚钱 -->


            <!-- 如何返佣规则 -->
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
      bizIntroduction: `收钱码是支付宝面向全行业商家推出的一种收钱免费、提现免费的便利收钱工具；点我达人针对未申请过收钱码的商家，帮助其开通收款码，根据动销笔数可获得返佣，点击下方查看详细返佣规则。`,
      bizTitle: "业务介绍",
      back_icon: loadImage("back_icon.png"),
      topLogo: loadImage("alipay_top.png"),
      divFrame: loadImage("div_frame.png"),
      lineYellow: loadImage("line_yellow.png")
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

.biz_panel {
  height: 260px;
}

.bigText {
  font-size: 32px;
}

.whiteText {
  color: white;
}

.fl {
  float: left;
}

.ml_15px {
  margin-left: 15px;
}

.mt_15px {
  margin-top: 30px;
}

.mr_15px {
  margin-right: 15px;
}

.pl_15px {
  padding-left: 15px;
}

.pr_15px {
  padding-right: 15px;
}

.title_bar {
  width: 750px;
  height: 110px;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.content {
  width: 600px;
}

.content_font {
  width: 600px;
  font-size: 28px;
  color: white;
  font-family: PingFangSC;
  line-height: 1.57;
}

.biz_line {
  width: 20px;
  height: 30px;
}

.bizIntroduction {
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.centerHorizontal{
   flex-direction: row;
  justify-content: center;
  align-items: center;
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
.content_panel {
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
  align-items: center;
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
