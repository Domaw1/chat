<template>
  <div class="main">
    <div class="hat">
      <h1 @click="openProfile(us.displayName)">
        Добро пожаловать, {{ us.displayName }}
      </h1>
      <user-avatar :photo="us.photoURL" alt="user avatar" class="user-avatar" @click="openProfile(us.displayName)"/>
      <button @click="signOut">Выйти</button>
    </div>
    <chat-window :messages="usersName" :currentUsername="us.displayName" />
    <hr />
    <send-message-form :displayName="us.displayName" />
  </div>
</template>

<script>
import { VTextField } from "vuetify/lib/components/index.mjs";
import { ref, onMounted, nextTick, watch, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import {
  getMessages,
  getCurrentUser,
  signOutUser,
  someFunc,
  getUserImage,
} from "@/db/db";
import { VProgressCircular } from "vuetify/lib/components/index.mjs";
import ChatWindow from "@/components/ChatWindow.vue";
import SendMessageForm from "@/components/SendMessageForm.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import { useUserStore } from "@/store/user";

export default {
  name: "ChatPage",
  components: {
    VTextField,
    VProgressCircular,
    ChatWindow,
    SendMessageForm,
    UserAvatar,
  },

  setup() {
    const inputMessage = ref("");
    const router = useRouter();
    const { usersName } = getMessages();
    const us = ref("");
    const store = useUserStore();
    const { getUserByName, addUser } = store;

    watch(usersName, (newValue, oldValue) => {
      usersName.value.forEach((user) => {
        const userInStore = getUserByName(user.displayName);
        if (!userInStore) {
          getUserImage(user.displayName)
            .then((url) => {
              addUser({ username: user.displayName, photo: url });
              user["photo"] = url;
            })
            .catch((e) => {
              user["photo"] =
                "https://avatars.mds.yandex.net/i?id=0d18ad8a7d1a969fabe8b3ded695d3396ea950a0-11376477-images-thumbs&n=13";
            });
        } else {
          user["photo"] = userInStore.photo;
        }
      });
    });

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
      getCurrentUser()
        .then((user) => {
          us.value = user;
        })
        .catch(() => {
          router.push({
            name: "home",
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

h1:hover, .user-avatar:hover {
  cursor: pointer;
}

.user-avatar {
  align-self: flex-end;
  margin-left: 15px;
}
</style>
