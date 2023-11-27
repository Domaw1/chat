<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
button {
  width: 250px;
  height: 35px;
  font-size: 20px;
  box-shadow: 1px 1px 6px black;
  border: none;
  border-radius: 7px;
  background-color: #ea526f;
  color: aliceblue;
}
</style>
