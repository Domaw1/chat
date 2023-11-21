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
        <div>{{ message.content }}</div>
        <div>{{ message.time }}</div>
      </div>
    </div>
    <hr />
    <div class="footer">
      <v-form @submit.prevent class="form">
        <div class="send">
          <input type="text" class="text" v-model="inputMessage" />
          <button type="submit" height="45px" @click="sendMessage">
            Отправить
          </button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { VTextField, VBtn, VForm } from "vuetify/lib/components/index.mjs";
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { readUserData, updateUserData, listsUserData } from "@/db/db";

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

    const state = reactive({
      username: "",
      messages: [],
    });

    const user = route.params.username;

    const sendMessage = () => {
      const currentUser = state.messages.find((us) => us.username == user);
      const time = new Date();
      const hours = `${time.getHours()}:${time.getMinutes()}`;
      if (inputMessage.value !== "") {
        const message = inputMessage.value;
        if (currentUser !== undefined) {
          // users.value[user].push(message);
          state.messages.push({
            username: currentUser.username,
            content: message,
            time: hours
          });
          console.log(state.messages);
          const idx = state.messages.indexOf(currentUser);
          updateUserData(user, state.messages[idx]);
          inputMessage.value = "";
        } else {
          // updateUserData(user, users.value[user]);
          state.messages.push({
            username: user,
            content: message,
            time: hours
          });
          console.log("here");
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
        messages.push({
          username: key,
          message: data[key],
        });
      });
      state.messages = messages[0].message;
    });

    return {
      user,
      messages,
      inputMessage,
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

.send {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 500px;
  height: 70px;
}

.send > input {
  width: 300px;
  height: 40px;
  box-shadow: 1px 10px 10px black;
  margin-right: 8px;
}

.send > button {
  height: 40px;
  width: 100px;
  box-shadow: 1px 10px 10px black;
  border-radius: 8px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ea526f;
  height: 100vh;
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
  background-color: #ea526f;
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
  padding: 5px;
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
  min-height: 50vh;
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
