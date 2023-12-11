<template>
  <div class="main">
    <div class="hat">
      <h1 @click="openProfile(currentUser.displayName)">
        Добро пожаловать, {{ currentUser.displayName }}
      </h1>
      <user-avatar
        :photo="currentUser.photoURL"
        alt="user avatar"
        class="user-avatar"
        @click="openProfile(currentUser.displayName)"
      />
      <button @click="signOut">Выйти</button>
    </div>
    <chat-window
      :messages="message"
      :currentUsername="currentUser.displayName"
    />
    <hr />
    <send-message-form :displayName="currentUser.displayName" :toUser="to"/>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import router from "@/router";
import {
  getMessages,
  getCurrentUser,
  signOutUser,
  getUserImage,
} from "@/db/db";
import ChatWindow from "@/components/ChatWindow.vue";
import SendMessageForm from "@/components/SendMessageForm.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import UserFriends from "@/components/UserFriends.vue";
import { useUserStore } from "@/store/user";
import { useRoute } from "vue-router";

const currentUser = ref("");
const allImagesLoaded = ref(false);
const message = ref([]);

const route = useRoute();
const to = route.query.username;
const { usersName } = getMessages();

const store = useUserStore();
const { getUserByName, addUser } = store;

watch(
  usersName,
  () => {
    Object.keys(usersName.value[0]).forEach((key) => {
      if(to === key) {
        message.value = usersName.value[0][key]
      }
    })
  },
  { deep: true }
);

// for (const user of usersName.value) {
//   Object.keys(user).forEach(async (key) => {
//     // users.value.push(key);
//     const userInStore = getUserByName(key);
//     try {
//       if (!userInStore || !userInStore.photo) {
//         const image = await getUserImage(key);
//         addUser({ username: key, photo: image });
//         user[key].photo = image;
//         //   user.photo = image;
//       } else {
//         //   user.photo = userInStore.photo;
//         user[key].photo = userInStore.photo;
//       }
//     } catch (error) {
//       if (!userInStore || !userInStore.photo) {
//         addUser({
//           username: key,
//           photo:
//             "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg",
//         });
//         user[key].photo =
//           "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg";
//       }
//     }
//   });
// }
// allImagesLoaded.value = true;

// watch(usersName, async () => {
//   console.log(usersName.value);
//   for (const user of usersName.value) {
//     const userInStore = getUserByName(user.displayName);
//     try {
//       if (!userInStore || !userInStore.photo) {
//         const image = await getUserImage(user.displayName);
//         addUser({ username: user.displayName, photo: image });
//         user.photo = image;
//       } else {
//         user.photo = userInStore.photo;
//       }
//     } catch (error) {
//       if (!userInStore || !userInStore.photo) {
//         addUser({
//           username: user.displayName,
//           photo:
//             "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg",
//         });
//         user.photo =
//           "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg";
//       }
//     }
//   }
//   allImagesLoaded.value = true;
// });

const signOut = () => {
  signOutUser();
  router.push({
    name: "login",
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
      currentUser.value = user;
    })
    .catch(() => {
      router.push({
        name: "login",
      });
    });

});
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
  background-color: white;
  height: 100vh;
}

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

h1 {
  align-self: flex-end;
  margin-left: 5px;
}

h1:hover,
.user-avatar:hover {
  cursor: pointer;
}

.user-avatar {
  align-self: flex-end;
  margin-left: 15px;
}
</style>
