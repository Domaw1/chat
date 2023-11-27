<template>
  <div>
    {{ currentUser }}
    <div class="user-data">
      <div class="img">
        <img :src="currentUser.photoURL" alt="userPic" />
      </div>
      <div class="user-contacts">
        <h1>Имя: {{ currentUser.displayName }}</h1>
        <p>Email: {{ currentUser.email }}</p>
        <my-button @click="openEditingPopup" style="margin: 20px 0 20px 0"
          >Редактировать</my-button
        >
        <edit-profile-popup
          :isOpen="isOpen"
          @hide-dialog="hideEditingPopup"
          @change-profile="changeProfile"
        ></edit-profile-popup>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentUser, updateUser } from "@/db/db";
import { ref, onMounted } from "vue";
import MyButton from "@/components/UI/MyButton";
import EditProfilePopup from "@/components/EditProfilePopup.vue";

export default {
  name: "UserProfile",
  components: {
    MyButton,
    EditProfilePopup,
  },

  setup() {
    const currentUser = ref({});
    const isOpen = ref(false);

    const openEditingPopup = () => {
      isOpen.value = true;
    };

    const hideEditingPopup = () => {
      isOpen.value = false;
    };

    const changeProfile = (propertiesToUpdate) => {
      // console.log(propertiesToUpdate.value);
      updateUser(
        currentUser.value,
        propertiesToUpdate.value.name,
        propertiesToUpdate.value.email,
      );
    };

    onMounted(() => {
      getCurrentUser()
        .then((user) => {
          currentUser.value = user;
        })
        .catch(() => {});
    });
    return {
      currentUser,
      isOpen,
      openEditingPopup,
      hideEditingPopup,
      changeProfile,
    };
  },
};
</script>

<style scoped>
.user-data {
  display: flex;
  border: 2px solid #ea526f;
  border-radius: 10px;
  box-shadow: 1px 1px 10px black;
  margin: 0px 10px 0px 10px;
}

.user-contacts {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  margin-left: 20px;
}

.img {
  display: flex;
  justify-content: center;
  height: 200px;
}
</style>
