<template>
  <div class="main">
    <div class="hat">
      <h1>Добро пожаловать, Артур</h1>
      <button @click="$router.go(-1)">Выйти</button>
    </div>
    <div class="chat">
      <div class="message">
        <div class="username">Артур</div>
        <div>Hi</div>
      </div>
      <div class="friend-message">
        <div class="username">Артур</div>
        <div>Hi</div>
      </div>
    </div>
    <hr />
    <div class="footer">
      <v-form @submit.prevent class="form">
        <v-text-field class="text"></v-text-field>
        <v-btn type="submit" class="mt-2" height="45px">Отправить</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { VTextField, VBtn, VForm } from "vuetify/lib/components/index.mjs";

export default {
  name: "ChatPage",
  components: {
    VTextField,
    VBtn,
    VForm,
  },

  setup() {
    
  }
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
  flex-direction: column;
  align-items: center;
}

.hat {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
}

.footer {
  display: flex;
  flex-direction: row;
  background-color: aliceblue;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
}

.text {
  background-color: aliceblue;
  width: 300px;
  height: 60px;
}

.hat > button {
  position: absolute;
  top: 15px;
  right: 15px;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: right;
}

.chat {
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  width: 500px;
  border-radius: 20px 20px 0px 0px;
}

.message,
.friend-message {
  width: 200px;
  border: 1px solid black;
  margin: 5px;
  border-radius: 15px;
  padding: 5px;
  font-weight: 600;
}

.message {
  background-color: #ea526f;
  align-self: flex-end;
  color: #fff;
}

.username {
  color: black;
}

h1 {
  align-self: flex-end;
  margin-left: 5px;
}
</style>
