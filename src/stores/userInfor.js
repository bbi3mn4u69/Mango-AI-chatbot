import { defineStore } from "pinia";
export const useUserInforStore = defineStore("userInfor", {
  state: () => ({
    user: {
      name: null,
      email: null,
      image: null,
    },
  }),
  actions: {
    setUserInfo(name, email, image, authRole) {
      this.user.name = name;
      this.user.email = email;
      this.user.image = image;
      this.user.authRole = authRole;
    },
    resetUserInfo() {
      this.user.name = null;
      this.user.email = null;
      this.user.image = null;
      this.user.authRole = null;
    },
  },
  getters: {
    getUserInfo: (state) => state.user
  },
  persist: {
    enabled: true,
    strategies: [
        {
            key: 'userInfor',
            storage: localStorage,  // You can also use sessionStorage
        }
    ]
}
});
