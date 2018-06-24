<template>
  <div class="wrapper">
    
    <list class="list" contentSize={width:700px,height:300px}
    @loadmore="loadMore" loadmoreoffset="10">
      <header>
        <div class="header">
          <text class="count">Appear items:{{appearMin}} ~ {{appearMax}}</text>
          <text class="count">appearIds---{{appearIdStr}}</text>
          <text class="head">HEAD</text>
        </div>
      </header>
      <cell class="cell"  v-for="(item,key) in lists"
      :key="key" :index="key"
      append="true">
        <div class="panel" 
        @appear="onAppear(key,$event)"
        @disappear="onDisappear(key,$event)">
          <text class="text">row---{{item}}</text>
        </div>
      </cell>
    </list>
  </div>
</template>

<script>
let modal=weex.requireModule('modal');
const LOADMORE_SIZE=5;
export default {
  data(){
    return({
      appearMin:1,
      appearMax:1,
      appearIds:[],
      appearIdStr:'',
      lists:['1','2','3','4','19','5','6','7','8','9','10','11']
    });
  },
  methods:{
    onAppear(index,event){
      let number=this.lists[index];
      console.log('appear-----'+number);
      let textArray=this.appearIds;
      textArray.push(number);
      this.getMinAndMaxIds(textArray);
    },
    onDisappear(index,event){
      var disAppearId = this.lists[index];
        console.log('+++++', disAppearId);
        var appearIds = this.appearIds;
        var index = appearIds.indexOf(disAppearId);
        if (index > -1) {
          appearIds.splice(index, 1);
        }
        this.getMinAndMaxIds(appearIds);
    },
    getMinAndMaxIds(ids){
      ids.sort((a,b)=>{
        return a-b;
      });
      this.appearIds=ids;
      this.appearMax=ids[ids.length-1];
      this.appearMin=ids[0];
      this.getAppearIds();
    },
    getAppearIds(){
      let str="";
      this.appearIds.forEach(element => {
        str+=element+",";
      });
      this.appearIdStr=str;
    },
    loadMore(event){
      modal.toast({
        message:'loading...',
        duration:1
      });

      setTimeout(()=>{
        const length=this.lists.length;
        for(let i=length;i<length + LOADMORE_SIZE;++i){
          this.lists.push(i);
        }
      },1000);
    }
  }
}
</script>

<style>
.wrapper{
  flex: 1;
  width:750px;
  flex-direction: column;
  background-color: burlywood;
  justify-content: center;
  align-items: center;
}

.head{
  width: 750px;
  height: 100px;
  line-height: 100px;
  font-size: 50px;
  color: #fe751a;
  text-align: center;
}

.header{
   background-color: rgba(162, 217, 192,0.5);
   padding: 20px;
}

.count {
    width: 700px;
    font-size: 30px;
    height: 50px;
    margin-left: 20px;
    margin-right: 20px;
    line-height: 50px;
}

.list{
}

.cell{
}

.panel{
  width: 600px;
  height: 200px;
  margin-left: 75px;
  margin-top: 30px;
  border-width: 1px;
  border-color: black;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #fe751a;
}

.text{
  font-size: 30px;
  color: white;
  /* line-height: 200px; */
  text-align: center;
}
</style>
