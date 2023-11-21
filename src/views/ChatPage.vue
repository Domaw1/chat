<template>
  <div class="main">
    <div class="hat">
      <h1>Добро пожаловать, {{ user }}</h1>
      <button @click="$router.go(-1)">Выйти</button>
    </div>
    <div class="chat">
      <div
        v-for="message in state.messages"
        :key="message"
        :class="message.username === user ? 'message' : 'friend-message'"
      >
        <div class="username">{{ message.username }}</div>
        <div>{{ message.message }}</div>
      </div>
    </div>
    <hr />
    <div class="footer">
      <v-form @submit.prevent class="form">
        <v-text-field class="text" v-model="inputMessage"></v-text-field>
        <v-btn type="submit" class="mt-2" height="45px" @click="sendMessage"
          >Отправить</v-btn
        >
      </v-form>
    </div>
  </div>
</template>

<script>
import { VTextField, VBtn, VForm } from "vuetify/lib/components/index.mjs";
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { readUserData, updateUserData } from "@/db/db";

export default {
  name: "ChatPage",
  components: {
    VTextField,
    VBtn,
    VForm,
  },

  setup() {
    const messages = ref([]);
    const inputMessage = ref("");
    const route = useRoute();
    const users = ref({});

    const state = reactive({
      username: "",
      messages: []
    });

    const user = route.params.username;

    const sendMessage = () => {
      if (inputMessage.value !== "") {
        const message = inputMessage.value;
        if (users.value[user]) {
          users.value[user].push(message);
          updateUserData(user, users.value[user]);
          inputMessage.value = "";
        } else {
          users.value[user] = [...messages.value];
          updateUserData(user, users.value[user]);
          inputMessage.value = "";
        }
        // console.log(users.value[user]);
      }
    };

    onMounted(() => {
      const data = readUserData();
      state.username = user;
      let messages = [];

      Object.keys(data).forEach((key) => {
        users.value[key] = data[key];
        messages.push({
          username: key,
          message: data[key]
        });
      });

      state.messages = messages;
      console.log(state);
    });
    

    return {
      user,
      messages,
      inputMessage,
      users,
      state,
      sendMessage,
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
  margin-left: 20px;
}

.message {
  background-color: #ea526f;
  align-self: flex-end;
  color: #fff;
  margin-right: 20px;
}

.username {
  color: black;
}

h1 {
  align-self: flex-end;
  margin-left: 5px;
}
</style>
