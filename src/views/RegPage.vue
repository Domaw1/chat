<template>
  <div class="home">
    <reg-form />
  </div>
</template>

<script>
import RegForm from '@/components/RegForm.vue';

export default {
  name: "HomeView",
  components: {
    RegForm,
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
