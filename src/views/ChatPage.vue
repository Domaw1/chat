<template>
  <div class="main">
    <div class="hat">
      <h1>Добро пожаловать, {{ currentUserMail }}</h1>
      <button @click="$router.go(-1)">Выйти</button>
    </div>
    <div class="chat" ref="scrollToMe">
      <div v-if="!aa.length" class="spinner">
        <v-progress-circular indeterminate :size="75" color="red"></v-progress-circular>
      </div>
      <div
        v-for="message in aa"
        :key="message.email"
        :class="
          message.email === currentUserMail ? 'message' : 'friend-message'
        "
      >
        <div class="username">{{ message.email }}</div>
        <div class="mes">
          <div class="mes-content">{{ message.content }}</div>
          <div class="time">{{ message.time }}</div>
        </div>
      </div>
    </div>
    <hr />
    <div class="footer">
      <v-form @submit.prevent>
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
import { ref, onMounted, reactive, watch, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { sendMessageToFirestore, getFirestoreData, unsub } from "@/db/db";
import { VProgressCircular } from "vuetify/lib/components/index.mjs";

export default {
  name: "ChatPage",
  components: {
    VTextField,
    VProgressCircular
  },

  setup() {
    const inputMessage = ref("");
    const route = useRoute();
    const { aa } = unsub();
    const currentUserMail = route.params.email;

    const scrollToMe = ref(null);

    const scrollToBottom = () => {
      if (scrollToMe.value) {
        scrollToMe.value.scrollTop = scrollToMe.value.scrollHeight;
      }
    };

    onUpdated(scrollToBottom);

    const sendMessage = () => {
      const time = new Date();
      const hours = `${time.getHours()}:${time.getMinutes()}`;

      if (inputMessage.value !== "") {
        const message = inputMessage.value;
        const currentMessage = {
          email: currentUserMail,
          content: message,
          time: hours,
        };

        // addUser(currentMessage);
        sendMessageToFirestore(currentMessage);
        inputMessage.value = "";
      }
    };

    onMounted(() => {
      scrollToBottom();
      getFirestoreData();
      unsub();
      // checkChangesOnDb();
    });

    return {
      inputMessage,
      scrollToMe,
      aa,
      currentUserMail,
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

.mes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.mes-content {
  margin: 0 10px 10px 0;
  font-size: 20px;
}

.time {
  font-size: 15px;
  align-self: flex-end;
}

.send {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-width: 100%;
  height: 70px;
}

.send > input {
  width: 80%;
  height: 40px;
  box-shadow: 1px 1px 10px black;
  margin-right: 8px;
  border-radius: 8px;
}

@media screen and (width < 500px) {
  .send > input {
    width: 300px;
  }
}

.send > button {
  height: 40px;
  width: 100px;
  box-shadow: 1px 1px 10px black;
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

.form,
.footer {
  width: 100%;
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
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  overflow-y: auto;
}

.message,
.friend-message {
  border: 1px solid black;
  margin: 5px;
  border-radius: 15px;
  padding: 5px;
  font-weight: 600;
}

.friend-message {
  align-self: flex-start;
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

.spinner {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
</style>
