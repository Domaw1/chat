<template>
  <div class="home">
    <log-form></log-form>
  </div>
</template>

<script>

import LogForm from "@/components/LogForm.vue";

export default {
  name: "HomeView",
  components: {
    LogForm,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  height: 100vh;
  background-color: #ea526f;
  justify-content: center;
  align-items: center;
}

</style>
