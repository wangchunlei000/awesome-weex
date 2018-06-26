<template>
  <div class="wrapper">
    <div class="row" v-for="(v,i) in list" :key="i">
      <div class="item" v-for="(item,index) in v" :key="index" @click="click(item,$event)">
        <text class="text">
          {{item}}
        </text>
      </div>
    </div>
    <div class="click_box">
      <text class="click">{{clickText}}</text>
    </div>
  </div>
</template>

<script>
let modal=weex.requireModule('modal');
export default {
  data(){
    return({
      clickText:'Click\rMe',
      list: [
        ['Hello', 'World', 'From','DWD','BugKiller'],
        ['D', 'E', 'F','😎'],
        ['G', 'H', 'I'],
        ['Hello','World'],
        ['BugKiller']
      ]
    });
  },
  methods:{
    click(item,event){
      console.log(item);
      modal.toast({
        message:item,
        duration:1
      });
    }
  }
}
</script>

<style>
.wrapper{
  flex: 1;
  width: 750px;
  justify-content: space-between;
  align-items: stretch;
}
.row{
  flex-direction: row;
  width: 750px;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;
}
.item{
  border-width: 0.5px;
  border-color: #666666;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.text{
  font-size: 30px;
  text-align: center;
  padding: 0;
}
.click_box{
  position: absolute;
  bottom: 50px;
  align-items: center;
  width: 750px;
}
.click{
  border-radius: 100px;
  background-color: rgba(250, 235, 215, 0.8);
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 40px;
  border-width: 0.5px;
  border-color: blueviolet;
}

.click:active{
  background-color: rgb(241, 173, 84);
}
</style>
