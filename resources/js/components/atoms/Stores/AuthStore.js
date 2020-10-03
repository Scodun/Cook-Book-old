import { axios } from "../../atoms";

import { observable } from "mobx";
import Cookies from "js-cookie";

class AuthStore {
    @observable user = null;
    @observable authToken = null;

    async fetchCurrentUser () {
      this.user = (await axios.get("/api/auth/user")).data;
    }

    async login (values) {
      const res = (await axios.post("/api/auth/login", values));
      const expires = (res.data.expires_at || 60 * 60) * 1000;
      const inOneHour = new Date(new Date().getTime() + expires);
      Cookies.set("access_token", res.data.access_token, { expires: inOneHour });
    }

    async register (values) {
      await axios.post("/api/auth/register", values);
    }
}

export default new AuthStore();
