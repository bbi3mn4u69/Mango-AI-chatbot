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
    setUserInfo(name, email, image) {
      this.user.name = name;
      this.user.email = email;
      this.user.image = image;
    },
    resetUserInfo() {
      this.user.name = null;
      this.user.email = null;
      this.user.image = null;
    }
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
