import axios, { AxiosRequestConfig, Method } from "axios";

const axiosRequest: any = (
  url: string,
  params: any = null,
  method: Method = "GET",
  token = "",
  data: any = null
) => {
  const axiosConfig: AxiosRequestConfig = {
    url,
    params,
    method,
    data,
    headers: {},
  };

  if (token) {
    axiosConfig.headers["Authorization"] = `Bearer ${token}`;
  }

  return axios(axiosConfig);
};
export default axiosRequest;
