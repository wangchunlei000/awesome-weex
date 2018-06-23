<template>
  <div class="wrapper">
    <text class="count">Appear items:{{appearMin}} ~ {{appearMax}}</text>
    <text class="count">appearIds---{{appearIdStr}}</text>
    <list class="list" contentSize={width:700px,height:300px}>
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
export default {
  data(){
    return({
      appearMin:1,
      appearMax:1,
      appearIds:[],
      appearIdStr:'',
      lists:['1','2','3','4','5','6','7','8','9','10','11']
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
.count {
    width: 700px;
    font-size: 30px;
    margin:10px;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
}

.list{
  flex: 1;
}

.cell{
}

.panel{
  width:600px;
  height: 200px;
  margin-top: 30px;
  border-width: 1px;
  border-color: black;
  justify-content: center;
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
