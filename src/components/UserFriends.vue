<template>
  <div class="main">
    <div v-if="friends[0]">
      {{ friends[0].messages }}
    </div>
    <div v-if="friends[0]">
      <div v-for="friend in friends[0].messages" :key="friend" class="messages">
        {{ friend }}
        <user-avatar :photo="friend['Aruut']" />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserAvatar from "./UserAvatar.vue";
import { getUserImage } from "@/db/db";
import { useUserStore } from "@/store/user";
import { ref, watch } from "vue";

const props = defineProps({
  friends: Array,
});

const users = ref([]);
const store = useUserStore();
const arr = props.friends;
const { addUser, getUserByName } = store;

const allImagesLoaded = ref(false);

// allImagesLoaded.value = true;
</script>

<style scoped>
.messages {
}
</style>
