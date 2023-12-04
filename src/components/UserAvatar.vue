<template>
  <div>
    <img :src="photo" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  photo: String,
});
</script>

<style scoped>
img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
</style>
