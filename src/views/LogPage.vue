<template>
  <div class="home">
    <log-form />
  </div>
</template>

<script>
import { getCurrentUser } from "@/db/db";
import LogForm from "@/components/LogForm.vue";
import { onMounted } from "vue";
import router from "@/router";

export default {
  name: "HomeView",
  components: {
    LogForm,
  },

  setup() {
    onMounted(() => {
      getCurrentUser()
        .then(() => {
          router.push({
            name: "chat"
          })
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
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
