<template>
  <div>
    {{ currentUser }}
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { getCurrentUser } from '@/db/db';

export default {
    name: 'UserProfile',

    setup() {
        const route = useRoute();
        const currentUser = route.params.email;
        console.log(getCurrentUser());
        return {
            currentUser,
        }
    }
}
</script>

<style scoped>

</style>