<template>
  <div>
    <img :src="username" alt="" />
  </div>
</template>

<script setup>
import { getUserImage } from "@/db/db";
import { ref, computed } from "vue";
import { useUserStore } from "@/store/user";

const props = defineProps({
  username: String,
});

const store = useUserStore();
const userImageLink = ref("");
const { getUserByName } = store;
const searchedUser = getUserByName(props.username);

// userImageLink.value = searchedUser.photo;
console.log(searchedUser);
</script>

<style scoped>
img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
</style>
