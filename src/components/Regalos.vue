<template>
  <div class="regalo">
    <br/>
    <br/>
    <img width="150px" :src="require('../assets/icono_regalo.png')" />
    <br/>
    <p class="textoo">El regalo es opcional, la asistencia obligatoria.<br/> Si queres tener un detalle con nosotros...</p>
    <br/>
    <Dialog/>
    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
  components: {
    Dialog
  }
  
}
</script>

<style>
.regalo{
  background-color: lightgreen!important;
  text-align: center;
}
.textoo{
  color:white;
  text-align: center;
  font-family: Georgia;
}
#btnn{
  padding-left: 40px;
  padding-right: 40px;
}
</style>