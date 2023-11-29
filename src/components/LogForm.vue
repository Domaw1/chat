<template>
  <div class="log-form">
    <h1>Авторизация</h1>
    <v-container>
      <v-row>
        <v-col cols="1" sm="1">
          <v-text-field
            v-model="inputEmail"
            clearable
            label="Ваша почта"
            type="text"
            variant="outlined"
            class="shrink-password"
            density="compact"
            :rules="[rules.required, rules.email]"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1" sm="1">
          <v-text-field
            :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            label="Ваш пароль"
            variant="outlined"
            class="shrink-password"
            density="compact"
            v-model="inputPassword"
            @keydown.enter="login"
            @click:append-inner="show2 = !show2"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <my-button @click="login">Войти</my-button>
    <button @click="openRegPage" class="reg-btn">Зарегистрироваться...</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { signInUser } from "@/db/db";
import { useUserStore } from "@/store/user";
import MyButton from "./UI/MyButton.vue";
import {
  VTextField,
  VContainer,
  VRow,
  VCol,
} from "vuetify/lib/components/index.mjs";

export default {
  name: "LogForm",
  components: {
    MyButton,
    VTextField,
    VContainer,
    VCol,
    VRow,
  },

  setup() {
    const inputEmail = ref("");
    const inputPassword = ref("");
    const router = useRouter();
    const store = useUserStore();
    const show2 = ref(false);

    const rules = {
      required: (value) => !!value || "Обязательное поле.",
      min: (v) => v.length >= 6 || "Минимум 6 символов",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Неверный e-mail.";
      },
    };

    const login = () => {
      if (inputEmail.value === "" || inputPassword.value === "") {
        alert("Все поля обязательны к заполнению");
        return;
      } else {
        const userToSign = {
          email: inputEmail.value,
          password: inputPassword.value,
        };
        const u = signInUser(userToSign.email, userToSign.password);
        u.then((newUser) => {
          if (newUser) {
            alert("Успешно! Добро пожаловать!");
            router.push({
              name: "chat",
            });
            store.userName = newUser.user;
            inputEmail.value = "";
            inputPassword.value = "";
          }
        }).catch((error) => {
          alert(error.message);
          inputEmail.value = "";
          inputPassword.value = "";
        });
      }
    };

    onMounted(() => {});

    const openRegPage = () => {
      router.push({ name: "registration" });
    };

    return {
      inputEmail,
      inputPassword,
      rules,
      show2,
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
  height: 350px;
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

.shrink-password {
  width: 250px;
}
</style>
