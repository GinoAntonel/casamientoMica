<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" v-on='on' id="btnn" outlined rounded color="white">VER CBU</v-btn>
      </template>

      <v-card>
        <v-card-title
          class="green"
          primary-title
        >
          Datos Bancarios
        </v-card-title>

        <v-card-text>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left"></th>
        <th class="text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in datos" :key="item.text1">
        <td>{{ item.text1 }}</td>
        <td>{{ item.text2 }}</td>
      </tr>
    </tbody>
  </v-simple-table>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        datos: [
          {
            text1: 'Alias',
            text2: 'Mica.Tomi',
          },
          {
            text1: 'CBU',
            text2: '2850399640094959223168',
          },
          {
            text1: 'CTA',
            text2: '439909495922316',
          },
          {
            text1: 'CUIL',
            text2: '20-35090926-6',
          },
          {
            text1: 'Banco Macro',
            text2: '',
          },
        ],
      }
    },
  }
</script>

<style scoped>
.tituloD{
  font-size: bold;
}
</style>