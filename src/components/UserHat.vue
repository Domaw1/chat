<template>
  <div class="hat">
    <h1 @click="openProfile(currentUser.displayName)">
      Добро пожаловать, {{ currentUser.displayName }}
    </h1>
    <user-avatar
      :photo="currentUser.photoURL"
      alt="user avatar"
      class="user-avatar"
      @click="openProfile(currentUser.displayName)"
    />
    <button @click="signOut">Выйти</button>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>