<template>
  <v-app>
    <!-- <v-app-bar fixed> -->
    <Header />
    <!-- </v-app-bar> -->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
