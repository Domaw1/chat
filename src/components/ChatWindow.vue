<template>
  <div class="chat" ref="scrollToMe">
    <div v-if="!messages.length" class="spinner">
      <v-progress-circular
        indeterminate
        :size="75"
        color="red"
      ></v-progress-circular>
    </div>
    <div v-for="message in messages" :key="message.displayName" class="ms">
      <div
        :class="
          message.displayName === currentUsername
            ? 'my-message'
            : 'my-friend-message'
        "
      >
        <div>
          <user-avatar :username="message.photo"></user-avatar>
        </div>
        <div
          :class="
            message.displayName === currentUsername
              ? 'message'
              : 'friend-message'
          "
        >
          <div class="username">{{ message.displayName }}</div>
          <div class="full-message">
            <div class="mes">
              <div class="mes-content">{{ message.content }}</div>
              <div class="time">{{ message.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUpdated, onMounted, nextTick, watch } from "vue";
import UserAvatar from "./UserAvatar.vue";
import { useUserStore } from "@/store/user";
import { getUserImage } from "@/db/db";

export default {
  name: "ChatWindow",
  components: {
    UserAvatar,
  },

  props: {
    messages: {
      type: Array,
      required: true,
    },

    currentUsername: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const scrollToMe = ref(null);
    const store = useUserStore();
    const mess = props.messages;
    const { getUserByName, addUser } = store;
    const searchedUser = getUserByName(props.currentUsername);

    const imagesLoaded = ref(false);

    onMounted(() => {
      // const imagePromises = mess.map(async (user) => {
      //   try {
      //     user["photo"] = await getUserImage(user.displayName);
      //   } catch (error) {
      //     user["photo"] = "https://example.com/default-avatar.jpg";
      //   }
      // });

      // await Promise.all(imagePromises);
      // imagesLoaded.value = true;
      // nextTick(scrollToBottom);
    });

    onUpdated(() => {
      if (imagesLoaded.value) {
        scrollToBottom();
      }
    });
    // props.messages.forEach((message) => {
    //   if (getUserByName(message.displayName) === undefined) {
    //     getUserImage(message.displayName)
    //       .then((url) => {
    //         store.addUser({ username: message.displayName, photo: url });
    //       })
    //       .catch(() => {
    //         store.addUser({
    //           username: message.displayName,
    //           photo:
    //             "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg",
    //         });
    //       });
    //   }
    //   else {
    //     console.log("not");
    //   }
    // });

    const scrollToBottom = () => {
      if (scrollToMe.value) {
        scrollToMe.value.scrollTop = scrollToMe.value.scrollHeight;
      }
    };

    onUpdated(scrollToBottom);

    return {
      scrollToMe,
    };
  },
};
</script>

<style scoped>
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

.spinner {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
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

.mes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.mes-content {
  margin: 0 10px 10px 0;
  font-size: 20px;
  word-wrap: break-word;
  max-width: 800px;
}

@media screen and (max-width: 900px) {
  .mes-content {
    max-width: 300px;
  }
}

.time {
  font-size: 15px;
  align-self: flex-end;
}

.full-message {
  display: flex;
}

.ms {
  display: flex;
  flex-direction: column;
}

.my-message,
.my-friend-message {
  display: flex;
  align-items: center;
}

.my-message {
  flex-direction: row-reverse;
}
</style>
