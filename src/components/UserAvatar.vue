<template>
  <div>
    <img :src="userImageLink" alt="" />
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

if (getUserByName(props.username)?.username === props.username) {
  userImageLink.value = searchedUser.photo;
  // console.log();
} else {
  getUserImage(props.username)
    .then((url) => {
      userImageLink.value = url;
      // if (!searchedUser?.username)
      // console.log(searchedUser.username);
      // console.log(getUserByName(props.username));
      if(!getUserByName(props.username))
        store.addUser({ username: props.username, photo: url });
    })
    .catch(() => {
      userImageLink.value =
        "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg";
    });
}
</script>

<style scoped>
img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
</style>
