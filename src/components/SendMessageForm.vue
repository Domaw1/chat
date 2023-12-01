<template>
  <div class="footer">
    <v-form @submit.prevent>
      <div class="send">
        <div class="emojis">
          <Picker
            :data="emojiIndex"
            set="twitter"
            @select="showEmoji"
            v-if="isEmojiOpen"
            class="picker-emoji"
          />
          <v-text-field
            v-model="inputMessage"
            clearable
            label="Сообщение"
            type="text"
            variant="outlined"
            class="shrink"
            maxlength="1024"
            counter
            append-icon="mdi-emoticon"
            @click:append="openEmoji"
            @keydown.enter="sendMessage"
          >
          </v-text-field>
        </div>
        <button type="submit" height="45px" @click="sendMessage">
          Отправить
        </button>
      </div>
    </v-form>
  </div>
</template>

<script>
import {
  VForm,
  VTextField,
  VTooltip,
  VIcon,
} from "vuetify/lib/components/index.mjs";
import { ref } from "vue";
import { sendMessageToFirestore } from "@/db/db";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
import data from "emoji-mart-vue-fast/data/all.json";
import "emoji-mart-vue-fast/css/emoji-mart.css";

export default {
  name: "SendMessageForm",
  components: {
    VForm,
    VTextField,
    VTooltip,
    VIcon,
    Picker,
  },

  props: {
    displayName: {
      type: String,
    },
  },

  setup(props) {
    const inputMessage = ref("");
    const emojiIndex = new EmojiIndex(data);
    const emojieOutput = ref("");
    const isEmojiOpen = ref(false);

    const showEmoji = (emoji) => {
      inputMessage.value += emoji.native;
    };

    const openEmoji = () => {
      if (isEmojiOpen.value) isEmojiOpen.value = false;
      else isEmojiOpen.value = true;
    };

    const sendMessage = () => {
      const time = new Date();
      const hours = `${time.getHours()}:${time.getMinutes()}`;

      if (inputMessage.value.trim() !== "") {
        const message = inputMessage.value;
        const currentMessage = {
          displayName: props.displayName,
          content: message,
          time: hours,
        };
        sendMessageToFirestore(currentMessage);
        inputMessage.value = "";
        isEmojiOpen.value = false;
      }
    };

    return {
      inputMessage,
      emojiIndex,
      emojieOutput,
      isEmojiOpen,
      sendMessage,
      showEmoji,
      openEmoji,
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
}

.shrink {
  margin: 25px 15px 5px 15px;
  background-color: aliceblue;
  width: 800px;
}

.send {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  min-width: 100%;
}

.send > input {
  width: 80%;
  height: 40px;
  box-shadow: 1px 1px 10px black;
  margin-right: 8px;
  border-radius: 8px;
}

.send > button {
  height: 40px;
  width: 100px;
  box-shadow: 1px 1px 10px black;
  border-radius: 8px;
  margin-right: 15px;
}

.picker-emoji {
  align-self: flex-end;
  position: absolute;
  bottom: 10%;
  width: auto;
}

.emojis {
  display: flex;
  flex-direction: column;
}

@media screen and (width < 600px) {
  .send > input {
    width: 30%;
  }

  .shrink {
    width: 300px;
  }

  /* .picker-emoji {
    align-self: flex-end;
    top: 42%;
    left: 20%;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    margin-right: 15px;
  } */
}
</style>
