import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("users", {
  state: () => {
    return {
      user: {},
      users: []
    }
  },

  getters: {
    getUser: (state) => state.user,
  },

  actions: {
    setUser(newUser) {
      this.user = newUser;
    },

    addUser(newUser) {
      this.users.push(newUser);
    }
  }
});
