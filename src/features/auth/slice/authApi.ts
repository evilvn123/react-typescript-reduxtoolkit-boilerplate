// import { API_ENDPOINT } from '@src/configs';
import axiosRequest from "src/utils/axiosRequest";

class AuthApi {
  authenApiEndpoint: string;

  constructor() {
    this.authenApiEndpoint = `https://abc.com/auth`;
  }

  login(data: any) {
    return axiosRequest(
      this.authenApiEndpoint + "/login",
      null,
      "POST",
      "",
      data
    );
  }
}

export default new AuthApi();
