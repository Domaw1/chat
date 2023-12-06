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

export default {
  name: "HomeView",
  components: {
    LogForm,
  },

  setup() {
    const enter = (userToSign) => {
      const u = signInUser(userToSign.email, userToSign.password);
      u.then((newUser) => {
        if (newUser) {
          alert("Успешно! Добро пожаловать!");
          router.push({
            name: "chat",
          });
        }
      }).catch((error) => {
        alert(error.message);
      });
    };

    onMounted(() => {
      getCurrentUser()
        .then(() => {
          router.push({
            name: "chat",
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
