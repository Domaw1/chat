<template>
  <div class="main">
    <div class="hat" @click="openProfile(currentUser.displayName)">
      <h1 style="align-self: flex-end;">Добро пожаловать, {{ currentUser.displayName }}</h1>
      <user-avatar
        :photo="currentUser.photoURL"
        alt="user avatar"
        class="user-avatar"
        style="align-self: flex-end;"
      />
      <button @click="signOut">Выйти</button>
    </div>
    <user-friends :friends="users" />
</div> 
</template>

<script setup>
import UserFriends from "@/components/UserFriends.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import { onMounted, ref, watch } from "vue";
import { getCurrentUser, signOutUser, getMessages } from "@/db/db";
import router from "@/router";

const { usersName } = getMessages();
const users = ref([]);
const currentUser = ref({});

watch(
  usersName,
  () => {
    Object.keys(usersName.value[0]).forEach(user => {
      const message = {
        name: user,
        lastMessage: usersName.value[0][user][usersName.value[0][user].length - 1],
      };
      users.value.push(message);
    })
  },
  { deep: true }
);

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

onMounted(async () => {
  try {
    currentUser.value = await getCurrentUser();
  } catch (error) {
    router.push({
      name: "login",
    });
  }
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

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100vh;
}
</style>
