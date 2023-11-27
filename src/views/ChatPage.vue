<template>
  <div class="main">
    <div class="hat">
      <h1 @click="openProfile(us.displayName)">
        Добро пожаловать, {{ us.displayName }}
      </h1>
      <button @click="signOut">Выйти</button>
    </div>
    <chat-window :messages="usersName" :currentUsername="us.displayName" />
    <hr />
    <send-message-form :displayName="us.displayName" />
  </div>
</template>

<script>
import { VTextField } from "vuetify/lib/components/index.mjs";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getMessages, getCurrentUser, signOutUser } from "@/db/db";
import { VProgressCircular } from "vuetify/lib/components/index.mjs";
import ChatWindow from "@/components/ChatWindow.vue";
import SendMessageForm from "@/components/SendMessageForm.vue";

export default {
  name: "ChatPage",
  components: {
    VTextField,
    VProgressCircular,
    ChatWindow,
    SendMessageForm,
  },

  setup() {
    const inputMessage = ref("");
    const router = useRouter();
    const { usersName } = getMessages();
    const us = ref("");

    const signOut = () => {
      signOutUser();
      router.push({
        name: "home",
      });
    };

    const openProfile = (username) => {
      router.push({
        name: "profile",
        params: {
          name: username,
        },
      });
    };

    onMounted(() => {
      getCurrentUser().then((user) => {
        us.value = user;
      }).catch(() => {
        router.push({
          name: 'home'
        });
      });
    });

    return {
      inputMessage,
      usersName,
      us,
      openProfile,
      signOut,
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

h1 {
  align-self: flex-end;
  margin-left: 5px;
}

h1:hover {
  cursor: pointer;
}
</style>
