<template>
  <div>
    <div class="hat" @click="openProfile(currentUser.displayName)">
      <h1>Добро пожаловать, {{ currentUser.displayName }}</h1>
      <user-avatar
        :photo="currentUser.photoURL"
        alt="user avatar"
        class="user-avatar"
      />
      <button @click="signOut">Выйти</button>
    </div>
    <user-friends :friends="usersName" />
  </div>
</template>

<script setup>
import UserFriends from "@/components/UserFriends.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import { ref } from "vue";
import { getCurrentUser, signOutUser, getMessages } from "@/db/db";
import router from "@/router";

const props = defineProps({
  friends: Array,
});

const { usersName } = getMessages();
const currentUser = ref({});

const openProfile = (username) => {
  router.push({
    name: "profile",
    params: {
      name: username,
    },
  });
};

const signOut = () => {
  signOutUser();
  router.push({
    name: "login",
  });
};

getCurrentUser()
  .then((user) => {
    currentUser.value = user;
  })
  .catch(() => {
    router.push({
      name: "login",
    });
  });
</script>

<style scoped>
.hat {
  display: flex;
  background-color: #ea526f;
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
</style>