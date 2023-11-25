<template>
  <div class="main">
    <div class="hat">
      <h1 @click="openProfile(currentUserMail)">Добро пожаловать, {{ currentUserMail }}</h1>
      <button @click="$router.go(-1)">Выйти</button>
    </div>
    <chat-window :messages="aa" :currentUserMail="currentUserMail"/>
    <hr />
    <send-message-form :currentUserMail="currentUserMail"/>
  </div>
</template>

<script>
import { VTextField } from "vuetify/lib/components/index.mjs";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { unsub, getCurrentUser } from "@/db/db";
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
    const route = useRoute();
    const router = useRouter();
    const { aa } = unsub();
    const currentUserMail = route.params.email;

    const openProfile = (userEmail) => {
      router.push({
        name: 'profile',
        params: {
          email: userEmail
        }
      })
    }

    onMounted(() => {
      unsub();
      // checkChangesOnDb();
    });

    return {
      inputMessage,
      aa,
      currentUserMail,
      openProfile
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
