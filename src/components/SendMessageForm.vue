<template>
  <div class="footer">
    <v-form @submit.prevent>
      <div class="send">
        <input class="text" type="text" v-model="inputMessage" />
        <button type="submit" height="45px" @click="sendMessage">
          Отправить
        </button>
      </div>
    </v-form>
  </div>
</template>

<script>
import { VForm } from 'vuetify/lib/components/index.mjs';
import { ref } from 'vue';
import { sendMessageToFirestore } from '@/db/db';

export default {
  name: "SendMessageForm",
  components: {
    VForm,
  },

  props: {
    currentUserMail: {
        type: String,
    }
  },

  setup(props) {
    const inputMessage = ref("");
    const sendMessage = () => {
      const time = new Date();
      const hours = `${time.getHours()}:${time.getMinutes()}`;

      if (inputMessage.value !== "") {
        const message = inputMessage.value;
        const currentMessage = {
          email: props.currentUserMail,
          content: message,
          time: hours,
        };
        sendMessageToFirestore(currentMessage);
        inputMessage.value = "";
      }
    };

    return {
        inputMessage,
        sendMessage
    }
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
}

.send {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-width: 100%;
  height: 70px;
}

.send > input {
  width: 80%;
  height: 40px;
  box-shadow: 1px 1px 10px black;
  margin-right: 8px;
  border-radius: 8px;
}

@media screen and (width < 500px) {
  .send > input {
    width: 300px;
  }
}

.send > button {
  height: 40px;
  width: 100px;
  box-shadow: 1px 1px 10px black;
  border-radius: 8px;
}

.text {
  background-color: aliceblue;
  width: 300px;
  height: 60px;
  padding: 5px;
}
</style>
