<template>
  <div class="wrapper">
    <div class="row" v-for="(v,i) in list" :key="i">
      <div class="item" v-for="(item,index) in v" :key="index" @click="click(item,$event)">
        <text class="text">
          {{item}}
        </text>
      </div>
    </div>
  </div>
</template>

<script>
let modal=weex.requireModule('modal');
export default {
  data(){
    return({
      list: [
        ['A', 'B', 'C','😁','Hello'],
        ['D', 'E', 'F','😎'],
        ['G', 'H', 'I','😓']
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
  border-width: 1px;
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
</style>
