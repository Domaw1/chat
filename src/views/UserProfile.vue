<template>
  <div>
    <div class="user-data">
      <div class="img">
        <img :src="currentUser.photoURL" alt="userPic" ref="avatar"/>
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
import {
  getCurrentUser,
  updateUser,
  createUserImage,
  getUserImage,
  uploadFileToFirebaseStorage
} from "@/db/db";
import { ref, onMounted, createElementBlock } from "vue";
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
    const avatar = ref(null);

    const openEditingPopup = () => {
      isOpen.value = true;
    };

    const hideEditingPopup = () => {
      isOpen.value = false;
    };

    const changeProfile = (propertiesToUpdate) => {
      // updateUser(
      //   currentUser.value,
      //   propertiesToUpdate.value.name,
      //   propertiesToUpdate.value.email
      // );
      createUserImage(
        propertiesToUpdate.value.photo[0],
        currentUser.value.displayName
      );
    };

    onMounted(() => {
      getCurrentUser()
        .then((user) => {
          currentUser.value = user;
          const url = getUserImage(currentUser.value.displayName).then((url) => {
            currentUser.value.photoURL = url;
          }).catch((err) => {
            console.log(err.message);
          });
        })
        .catch(() => {});
    });
    return {
      currentUser,
      isOpen,
      avatar,
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
