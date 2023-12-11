<template>
  <div class="home">
    <log-form @enter-user="enter" />
  </div>
</template>

<script>
import { getCurrentUser, signInUser } from "@/db/db";
import LogForm from "@/components/LogForm.vue";
import { onMounted } from "vue";
import router from "@/router";
import Swal from "sweetalert2";

export default {
  name: "HomeView",
  components: {
    LogForm,
  },

  setup() {
    const enter = (userToSign) => {
      const u = signInUser(userToSign.email, userToSign.password);
      u.then(async (newUser) => {
        if (newUser) {
          await Swal.fire({
            title: "Успешно!",
            text: "Добро пожаловать!",
            icon: "success",
          });
          router.push({
            name: "dialogs",
          });
        }
      }).catch((error) => {
        Swal.fire({
          title: "Ошибка!",
          text: error.message,
          icon: "error",
        });
      });
    };

    onMounted(() => {
      getCurrentUser()
        .then(() => {
          router.push({
            name: "dialogs",
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    });

    return {
      enter,
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
