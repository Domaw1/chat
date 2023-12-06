<template>
  <div class="home">
    <reg-form @create-user="create" />
  </div>
</template>

<script>
import RegForm from "@/components/RegForm.vue";
import { createNewUser } from "@/db/db";
import router from "@/router";
import Swal from "sweetalert2";

export default {
  name: "HomeView",
  components: {
    RegForm,
  },

  setup() {
    const create = (newUser) => {
      const u = createNewUser(newUser);
      u.then(async () => {
        await Swal.fire({
          title: "Успешно!",
          text: "Добро пожаловать!",
          icon: "success",
        });
        router.push({
          name: "login",
        });
      }).catch(async (error) => {
        await Swal.fire({
          title: "Ошибка!",
          text: error.message,
          icon: "error",
        });
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
