<template>
  <div>
    <div class="user-data">
      <div>
        <img :src="currentUser.photoURL" alt="userPic" class="avatar" />
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
import { getCurrentUser, createUserImage, getUserImage } from "@/db/db";
import { ref, onMounted } from "vue";
import MyButton from "@/components/UI/MyButton";
import EditProfilePopup from "@/components/EditProfilePopup.vue";
import Swal from "sweetalert2";
import router from "@/router";

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

    const changeProfile = async (propertiesToUpdate) => {
      if (propertiesToUpdate.value.photo[0]) {
        createUserImage(
          propertiesToUpdate.value.photo[0],
          currentUser.value.displayName
        );
        await Swal.fire({
            title: "Успешно!",
            text: "Ваш профиль обновлен!",
            icon: "success",
          });
        router.go();
      }
      isOpen.value = false;
    };

    onMounted(() => {
      getCurrentUser()
        .then((user) => {
          currentUser.value = user;
        })
        .catch((error) => {
          console.log(error.message);
        });
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
}

.user-contacts {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  margin-left: 20px;
}

.avatar {
  width: 400px;
  height: auto;
  border-radius: 10px;
}

@media screen and (width < 600px) {
  .user-data {
    flex-direction: column;
    width: 100%;
  }

  .avatar {
    margin-right: 15px;
    height: 350px;
    border-radius: 10px;
  }
}
</style>
