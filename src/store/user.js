import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("users", {
  state: () => {
    return {
      user: {},
      users: [],
      messages: []
    }
  },

  getters: {
    getUser: (state) => state.user,
    getUserByName: (state) => {
      return (username) => state.users.find(user => user.username === username);
    },
    
  },

  actions: {
    setUser(newUser) {
      this.user = newUser;
    },

    addUser(newUser) {
      this.users.push(newUser);
    },

    setMessages(newMessages) {
      this.messages = newMessages;
    }
  }
});
