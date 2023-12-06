<template>
  <div class="home">
    <reg-form @create-user="create" />
  </div>
</template>

<script>
import RegForm from "@/components/RegForm.vue";
import { createNewUser } from "@/db/db";
import router from "@/router";

export default {
  name: "HomeView",
  components: {
    RegForm,
  },

  setup() {
    const create = (newUser) => {
      const u = createNewUser(newUser);
      u.then(() => {
        alert("Успешно! Добро пожаловать!");
        router.push({
          name: "login",
        });
      }).catch((error) => {
        alert(error.message);
      });
    };

    return {
      create,
    };
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
