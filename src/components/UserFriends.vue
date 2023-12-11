<template>
  <div class="main">
    <div v-if="!friends[0]" class="spinner">
      <v-progress-circular
        indeterminate
        :size="75"
        color="red"
      ></v-progress-circular>
    </div>
    <div v-if="allDialogs" class="messages">
      <div v-for="friend in friends" :key="friend">
        <div class="dialogs" @click="openDialog(friend)">
          <user-avatar :photo="friend['photo']" />
          <div class="dialog">
            <div style="align-self: flex-start">
              {{ friend.name }}
            </div>
            <div class="last-message">
              <div>
                {{ friend.lastMessage.content }}
              </div>
              <div style="margin-right: 10px">
                {{ friend.lastMessage.time }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserAvatar from "./UserAvatar.vue";
import { getUserImage } from "@/db/db";
import { useUserStore } from "@/store/user";
import { ref, watch } from "vue";
import { VProgressCircular } from "vuetify/lib/components/index.mjs";
import router from "@/router";

const props = defineProps({
  friends: Array,
});

const users = ref([]);
const store = useUserStore();
const arr = ref([]);
arr.value = props.friends;

const allDialogs = ref(true);
const { addUser, getUserByName, setMessages } = store;

const openDialog = (mess) => {
  router.push({
    name: "chat",
    query: {
      username: mess.name,
    },
  });
  setMessages(mess.mess);
};

// arr[0].messages.forEach(async (element) => {
//   const userInStore = getUserByName(element.to);
//   try {
//     if (!userInStore || !userInStore.photo) {
//       const image = await getUserImage(element.to);
//       addUser({ username: element.to, photo: image });
//       users.value.push({
//         name: element.to,
//         lastMessage: element.mess[element.mess.length - 1],
//         photo: image,
//         mess: element.mess,
//       });
//     } else {
//       users.value.push({
//         name: element.to,
//         lastMessage: element.mess[element.mess.length - 1],
//         photo: userInStore.photo,
//         mess: element.mess,
//       });
//     }
//   } catch (error) {
//     if (!userInStore || !userInStore.photo) {
//       addUser({
//         username: element.to,
//         photo:
//           "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg",
//       });
//       users.value.push({
//         name: element.to,
//         lastMessage: element.mess[element.mess.length - 1],
//         photo:
//           "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg",
//         mess: element.mess,
//       });
//     }
//   }
// });
</script>

<style scoped>
.messages,
.spinner {
  background-color: white;
  padding: 5px;
  text-align: center;
  position: absolute;
  left: 0px;
  right: 0px;
}

.dialogs {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ea526f;
  margin-bottom: 10px;
}

.dialog {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
}

.last-message {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
