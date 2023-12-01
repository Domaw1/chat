<template>
  <div class="popup" v-if="isOpen" @click.stop="hideDialog">
    <div class="popup-content" @click.stop>
      <input
        type="text"
        placeholder="Изменить имя..."
        v-model="propertiesToUpdate.name"
      />
      <input
        type="text"
        placeholder="Изменить почту..."
        v-model="propertiesToUpdate.email"
      />
      <div>
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Аватар"
          prepend-icon="mdi-camera"
          label="Фото профиля"
          class="file_input"
          variant="outlined"
          v-model="propertiesToUpdate.photo"
        ></v-file-input>
      </div>
      <my-button @click="changeProfile">Изменить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import { ref } from "vue";
import { VFileInput } from "vuetify/lib/components/index.mjs";

export default {
  name: "EditProfilePopup",
  components: { MyButton, VFileInput },
  props: {
    isOpen: {
      type: Boolean,
    },
  },

  emits: ["hideDialog", "changeProfile"],

  setup(props, { emit }) {
    const rules = [
      (value) => {
        return (
          !value ||
          !value.length ||
          value[0].size < 2000000 ||
          "Avatar size should be less than 2 MB!"
        );
      },
    ];
    const propertiesToUpdate = ref({
      name: "",
      email: "",
      photo: [],
    });

    const hideDialog = () => {
      emit("hideDialog");
    };

    const changeProfile = () => {
      emit("changeProfile", propertiesToUpdate);
    };

    return {
      hideDialog,
      changeProfile,
      propertiesToUpdate,
      rules,
    };
  },
};
</script>

<style scoped>
.popup {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.popup-content {
  margin: auto;
  background: aliceblue;
  align-items: center;
  border-radius: 12px;
  min-height: 350px;
  min-width: 500px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

input {
  width: 400px;
  border: 1px solid #ea526f;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 15px;
}

.file_input {
  width: 400px;
}
</style>
