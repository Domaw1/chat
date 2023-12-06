<template>
  <div class="log-form">
    <h1>Регистрация</h1>
    <v-container>
      <v-row class="mb-5">
        <v-col cols="2" sm="1">
          <v-text-field
            label="Придумайте себе имя"
            variant="outlined"
            density="compact"
            class="shrink-password"
            v-model="newUser.inputUsername"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-5">
        <v-col cols="2" sm="1">
          <v-text-field
            label="Введите вашу почту"
            variant="outlined"
            density="compact"
            class="shrink-password"
            v-model="newUser.inputEmail"
            :rules="[rules.email, rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col cols="1" sm="1">
          <v-text-field
            :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Придумайте пароль"
            variant="outlined"
            density="compact"
            class="shrink-password"
            v-model="newUser.inputPassword"
            @click:append-inner="show1 = !show1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" sm="1">
          <v-text-field
            :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.match]"
            :type="show2 ? 'text' : 'password'"
            label="Повторите пароль"
            variant="outlined"
            density="compact"
            class="shrink-password"
            v-model="newUser.inputRepeatPassword"
            @click:append-inner="show2 = !show2"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <my-button class="btn-reg" @click="reg">Зарегистрироваться</my-button>
    <button class="log-btn" @click="openLogPage">Войти...</button>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";
import MyButton from "./UI/MyButton.vue";
import {
  VTextField,
  VRow,
  VCol,
  VContainer,
} from "vuetify/lib/components/index.mjs";

export default {
  name: "RegForm",
  components: { MyButton, VTextField, VRow, VCol, VContainer },

  emits: ["createUser"],

  setup(props, { emit }) {
    const newUser = ref({
      inputUsername: "",
      inputEmail: "",
      inputPassword: "",
      inputRepeatPassword: "",
    });
    const show1 = ref(false);
    const show2 = ref(false);

    const rules = {
      required: (value) => !!value || "Обязательное поле.",
      min: (v) => v.length >= 6 || "Минимум 6 символов",
      match: (value) =>
        value === newUser.value.inputPassword || "Пароли не совпадают",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Неверный e-mail.";
      },
    };

    const reg = () => {
      const checkingForEmptyInputs =
        newUser.value.inputEmail === "" ||
        newUser.value.inputPassword === "" ||
        newUser.value.inputUsername === "" ||
        newUser.value.inputRepeatPassword == "";

      const checkingForPasswords =
        newUser.value.inputPassword === newUser.value.inputRepeatPassword;

      if (checkingForEmptyInputs) {
        alert("Все поля обязательны к заполнению");
      } else if (!checkingForPasswords) {
        alert("Пароли не совпадают");
      } else {
        const userToCreate = {
          email: newUser.value.inputEmail,
          password: newUser.value.inputPassword,
          username: newUser.value.inputUsername
        }
        emit("createUser", userToCreate);
      }
    };

    const openLogPage = () => {
      router.push({
        name: "home",
      });
    };

    return {
      newUser,
      rules,
      show1,
      show2,
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
  height: 500px;
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

.shrink-password {
  width: 250px;
  line-height: 25px;
  height: 25px;
}

.btn-reg {
  margin-top: 30px;
}
</style>
