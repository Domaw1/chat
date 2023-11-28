<template>
  <div class="chat" ref="scrollToMe">
    <div v-if="!messages.length" class="spinner">
      <v-progress-circular
        indeterminate
        :size="75"
        color="red"
      ></v-progress-circular>
    </div>
    <div
      v-for="message in messages"
      :key="message.email"
      :class="
        message.displayName === currentUsername ? 'message' : 'friend-message'
      "
    >
      <div class="username">{{ message.displayName }}</div>
      <div class="mes">
        <div class="mes-content">{{ message.content }}</div>
        <div class="time">{{ message.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";

export default {
  name: "ChatWindow",

  props: {
    messages: {
      type: Array,
      required: true,
      default: [],
    },

    currentUsername: {
      type: String,
      required: true,
    },
  },

  setup() {
    const scrollToMe = ref(null);

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

@media screen and (width < 900px) {
  .mes-content {
    max-width: 300px;
  }
}

.time {
  font-size: 15px;
  align-self: flex-end;
}
</style>
