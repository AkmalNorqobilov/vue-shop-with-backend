<template>
  <v-app> 
      <v-app-bar color="blue" app absolute flat>
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text text-uppercase text-h4">
            Admin Panel
        </v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app color="blue lighten-4">

      </v-navigation-drawer>
      <v-main>
          <canvas id="myChart"></canvas>
      </v-main>
  </v-app>
</template>

<script>
  export default {
    data:()=>({
      drawer:false
    })
  }
</script>
