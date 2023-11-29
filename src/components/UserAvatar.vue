<template>
  <div>
    <img :src="userImageLink" alt="">
  </div>
</template>

<script setup>
import { getUserImage } from "@/db/db";
import { ref } from "vue";
import { useUserStore } from "@/store/user";

const props = defineProps({
  username: String,
});

const userImageLink = ref("");

getUserImage(props.username)
  .then((url) => {
    userImageLink.value = url;
  })
  .catch(() => {
    userImageLink.value = "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg";
  });
</script>

<style scoped>
img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
}
</style>
