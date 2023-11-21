<template>
  <div class="home">
    <div class="log-form">
      <h1>Введите логин</h1>
      <input type="text" placeholder="Ваш логин..." v-model="inputUsername" />
      <button @click="login">Войти</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "HomeView",
  components: {},

  setup() {
    const inputUsername = ref("");
    const router = useRouter();
    const login = () => {
      router.push({
        name: "chat",
        params: { username: inputUsername.value },
      });
    };

    return {
      inputUsername,
      login
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

.log-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  background-color: aliceblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px black;
}

h1 {
  margin-bottom: 20px;
  text-wrap: nowrap;
}

input {
  width: 250px;
  height: 30px;
  margin-bottom: 20px;
  padding: 8px;
  border-radius: 7px;
  border: none;
  box-shadow: 1px 1px 6px black;
}

button {
  width: 200px;
  height: 50px;
  font-size: 20px;
  box-shadow: 1px 1px 6px black;
  border: none;
  background-color: #ea526f;
  color: aliceblue;
  border-radius: 7px;
}
</style>
