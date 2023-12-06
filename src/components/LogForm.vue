<template>
  <div class="log-form">
    <h1>Авторизация</h1>
    <v-container>
      <v-row>
        <v-col cols="1" sm="1">
          <v-text-field
            :rules="[rules.required, rules.email]"
            v-model="user.inputEmail"
            clearable
            label="Ваша почта"
            type="text"
            variant="outlined"
            class="shrink-password"
            density="compact"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1" sm="1">
          <v-text-field
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            label="Ваш пароль"
            variant="outlined"
            class="shrink-password"
            density="compact"
            v-model="user.inputPassword"
            @keydown.enter="login"
            @click:append-inner="show = !show"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <my-button @click="login">Войти</my-button>
    <button @click="openRegPage" class="reg-btn">Зарегистрироваться...</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import MyButton from "./UI/MyButton.vue";
import {
  VTextField,
  VContainer,
  VRow,
  VCol,
} from "vuetify/lib/components/index.mjs";
import Swal from "sweetalert2";

export default {
  name: "LogForm",
  components: {
    MyButton,
    VTextField,
    VContainer,
    VCol,
    VRow,
  },

  emits: ["enterUser"],

  setup(props, { emit }) {
    const user = ref({
      inputUsername: "",
      inputEmail: "",
    });
    const router = useRouter();
    const show = ref(false);

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
      if (user.value.inputEmail === "" || user.value.inputPassword === "") {
        Swal.fire({
          title: "Ошибка!",
          text: "Все поля обязательны к заполнению",
          icon: "error",
        });
      } else {
        const userToSign = {
          email: user.value.inputEmail,
          password: user.value.inputPassword,
        };
        emit("enterUser", userToSign);
      }
    };

    const openRegPage = () => {
      router.push({ name: "registration" });
    };

    return {
      rules,
      show,
      user,
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

.shrink-password {
  width: 250px;
}
</style>
