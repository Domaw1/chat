import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("users", () => {
  const userName = ref({});

  const getUserName = computed(() => userName.value);

  return { userName, getUserName };
});
