<template>
  <v-container grid-list-md text-xs-center>
    <br/>
    <div class="img">
      <img :src="require('../assets/Mapas2P.png')" width="850px" height="350px"/>
    </div>
    <br/>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style >
.img{
  text-align: center;
}
.titleee{
  text-align: center;
  font-size: 0.75rem !important;
  color: lightslategray;
}
.infoo{
  text-align: center;
  font-family: Georgia;
  color:gray;
}
</style>