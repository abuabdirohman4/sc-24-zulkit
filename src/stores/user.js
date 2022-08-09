import { defineStore } from "pinia";
import axios from "axios";

export const useUserStpre = defineStore({
  id: "user",
  state: () => ({
    user: false,
  }),
  getters: {
    isLoggedIn: (state) => state.user !== false,
    getUser: (state) => state.user,
  },
  actions: {
    async fetchUser() {
      try {
        const data = await axios.get(
          "https://zullkit-backed.buildwithangga.id/api/user",
          {
            header: {
              Authorization:
                localStorage.getItem("token_type") +
                "  " +
                localStorage.getItem("access_token"),
            },
          }
        );
        this.user = data;
      } catch (error) {
        this.user = false;
      }
    },
  },
});
