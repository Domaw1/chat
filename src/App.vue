<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { VApp, VMain } from "vuetify/lib/components/index.mjs";

export default {
  name: "App",
  components: {
    VApp,
    VMain,
  },

  data: () => ({
    //
  }),
};
</script>
