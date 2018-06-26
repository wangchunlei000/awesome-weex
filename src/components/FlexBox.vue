<template>
  <div class="wrapper">
    <text class="box">Box1</text>
    <text class="box box250">Box2</text>
    <text class="box">Box3</text>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper{
  flex: 1;
  width: 750px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.box{
  width: 150px;
  height: 150px;
  border-width: 1px;
  border-color: blue;
  text-align: center;
  line-height: 150px;
  font-size: 40px;
  background-color: antiquewhite
}

.box250{
  width: 250px;
  height: 250px;
  line-height: 250px;
}
</style>
