<template>
  <div class="regalo">
    <br/>
    <p class="tituloF">2-11-2019</p>
    <Timer 
      starttime="Sep 25, 2019 11:05:00" 
      endtime="Nov 2, 2019 00:00:00" 
      trans='{  
      "day":"Dias",
      "hours":"Horas",
      "minutes":"Minutos",
      "seconds":"Segundos",
      "expired":"LLego el dia!!",
      "running":"Faltan... ",
      "upcoming":"Falta poco...",
      "status": {
      "expired":"LLego el dia!!",
      "running":"Faltan...",
      "upcoming":"Falta poco..."
      }}'
    ></Timer>
    <br/>
  </div>
</template>

<script>
import Timer from './Timer'

export default {
  components: {
    Timer
  }
}
</script>

<style>
.tituloF{
  font-family: "URW Chancery L", cursive;
  font-size: 60px;
  color: white;
}
</style>