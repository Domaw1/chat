<template>
  <div>
    {{ userName }}
    <img :src="userName.photoURL" alt="" />
  </div>
</template>

<script>
import { useUserStore } from '@/store/user';
import { useRoute } from 'vue-router';

export default {
    name: 'UserProfile',

    setup() {
        const route = useRoute();
        const currentUser = route.params.name;
        const store = useUserStore();
        const { userName } = store;

        return {
            currentUser, userName
        }
    }
}
</script>

<style scoped>

</style>