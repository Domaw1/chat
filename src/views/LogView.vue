<template>
  <div class="main">
    <div class="form">
      <h1>Введите ваш логин</h1>
      <v-responsive class="mx-auto" max-height="100px">
        <v-text-field
          label="Логин"
          hide-details="auto"
          style="width: 300px"
          v-model="inputUsername"
        ></v-text-field>
      </v-responsive>
      <button @click="login">Войти</button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { VTextField, VResponsive } from "vuetify/lib/components/index.mjs";
import { useRouter } from "vue-router";

export default {
  name: "LogView",
  components: {
    VTextField,
    VResponsive,
  },

  setup() {
    const inputUsername = ref("");

    const router = useRouter();

    const login = () => {
      if (inputUsername.value !== "") {
        router.push({
          name: "chat",
          params: { username: inputUsername.value },
        });
        console.log("dd");
      }
    };

    return {
      inputUsername,
      login,
    };
  },
};
</script>

<style scoped>
* {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  height: 100%;
  background-color: #ea526f;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  height: 370px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px black;
}

button {
  height: 40px;
  width: 200px;
  background-color: #ea526f;
  border-radius: 5px;
  height: 50px;
  color: aliceblue;
  box-shadow: 1px 7px 7px black;
}

h1 {
  color: grey;
  margin-bottom: 50px;
}
</style>
