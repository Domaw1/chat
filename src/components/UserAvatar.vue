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
// console.log(getUserByName(props.username));
// const searchedUser = getUserByName(props.username);
// console.log(searchedUser);
// userImageLink.value = searchedUser.photo;
</script>

<style scoped>
img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
</style>
