<template>
  <div class="log-form">
    <h1>Авторизация</h1>
    <input type="text" placeholder="Ваша почта..." v-model="inputEmail" />
    <input
      type="text"
      @keydown.enter="login"
      placeholder="Ваш пароль..."
      v-model="inputPassword"
    />
    <button @click="login" class="log-btn">Войти</button>
    <button @click="openRegPage" class="reg-btn">Зарегистрироваться...</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { signInUser } from "@/db/db";
import { useUserStore } from "@/store/user";

export default {
  name: "LogForm",

  setup() {
    const inputEmail = ref("");
    const inputPassword = ref("");
    const router = useRouter();
    const store = useUserStore();

    const login = () => {
      const userToSign = {
        email: inputEmail.value,
        password: inputPassword.value,
      };
      const u = signInUser(userToSign.email, userToSign.password);
      u.then((newUser) => {
        alert("Успешно! Добро пожаловать!");
        router.push({
          name: "chat",
        });
        // setUsername(newUser.displayName);
        store.userName = newUser.user;
        localStorage.setItem(`${newUser.user.displayName}`, JSON.stringify(newUser.user));

        inputEmail.value = "";
        inputPassword.value = "";
      }).catch((error) => {
        alert(error.message);
        inputEmail.value = "";
        inputPassword.value = "";
      });
    };

    onMounted(() => {
    });

    const openRegPage = () => {
      router.push({ name: "registration" });
    };

    return {
      inputEmail,
      inputPassword,
      login,
      openRegPage,
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

.reg-btn {
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

.log-btn {
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
