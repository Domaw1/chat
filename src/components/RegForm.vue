<template>
  <div class="log-form">
    <h1>Регистрация</h1>
    <input type="text" placeholder="Ваше имя..." v-model="inputUsername" />
    <input type="text" placeholder="Ваша почта..." v-model="inputEmail" />
    <input type="text" placeholder="Ваш пароль..." v-model="inputPassword" />
    <button @click="reg" class="reg-btn">Зарегистрироваться</button>
    <button class="log-btn" @click="openLogPage">Войти...</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createNewUser } from "@/db/db";


export default {
  name: "RegForm",
  components: {},

  setup() {
    const inputEmail = ref("");
    const inputPassword = ref("");
    const inputUsername = ref("");
    const router = useRouter();

    const reg = () => {
      const user = {
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value,
      };

      const u = createNewUser(user.email, user.password, user.username);
      u.then(() => {
        alert("Успешно! Авторизуйтесь.");
        router.push({
          name: "home",
        });
        inputEmail.value = "";
        inputPassword.value = "";
      }).catch((error) => {
        alert(error.message);
        inputEmail.value = "";
        inputPassword.value = "";
      });
    };

    const openLogPage = () => {
      router.push({
        name: "home",
      });
    };

    return {
      inputPassword,
      inputEmail,
      inputUsername,
      reg,
      openLogPage,
    };
  },
};
</script>

<style scoped>
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

.log-btn {
  align-self: flex-end;
  height: 30px;
  font-size: 15px;
  margin-top: 20px;
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

.reg-btn {
  width: 250px;
  height: 35px;
  font-size: 20px;
  box-shadow: 1px 1px 6px black;
  border: none;
  background-color: #ea526f;
  color: aliceblue;
  border-radius: 7px;
}
</style>
