import axios from "axios";
import LocalStorageService from "./localStorageServices";

const localStorageService = LocalStorageService.getService();

export const interceptor = () => {
  const axiosInstance = axios.create({
    baseURL: "https://api-im.chatdaddy.tech",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorageService.getAccessToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      } else {
        const data = axios
          .post(
            "https://api-teams.chatdaddy.tech/token",
            {
              refreshToken: "059c420e-7424-431f-b23b-af0ecabfe7b8",
              teamId: "a001994b-918b-4939-8518-3377732e4e88",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            localStorageService.setToken(res?.data.access_token);
            return res?.data.access_token;
          })
          .catch((error) => {
            console.log(error.response, "error");
          });
        return data;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      if (error.response.data.statusCode === 500) {
        const data = await axios
          .post(
            "https://api-teams.chatdaddy.tech/token",
            {
              refreshToken: "b2cea27b-62d3-441b-91bd-2d5a74892a0e",
              teamId: "dcf539d9-b203-4cdd-8719-c3fab44c1f47",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            return res?.data.access_token;
          })
          .catch((error) => {
            console.log(error.response, "error");
          });
        localStorageService.setToken(data);

        return data;
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
