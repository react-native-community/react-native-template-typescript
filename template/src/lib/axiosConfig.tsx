import axios from "axios";

const apiInstance = axios.create({
  baseURL: "YOUR_BASE_URL",
  headers: { "Content-Type": "application/json" },
  timeout: 1000 * 60 * 1.5,
});

// apiInstance.interceptors.request.use(
//   async (config) => {
//     let isToken = await AsyncStorage.getItem(USER_DATA);
//     if (isToken && isToken !== undefined) {
//       let parsedData = JSON.parse(isToken);
//       config.headers.Authentication = parsedData.accesstoken;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// apiInstance.interceptors.response.use(
//   async function (response) {
//     if (response.data.code == 401) {
//       console.log("interceptors", response)
//       const originalRequest = response.config;
//       let isLogin = await AsyncStorage.getItem(USER_DATA);
//       if (isLogin && !originalRequest._retry) {
//         let parsedUserData = JSON.parse(isLogin)
//         originalRequest._retry = true;
//         let res = null;
//         try {
//           res = await refreshAccessToken(parsedUserData);
//         } catch (e) {
//           expireUserToken();
//           console.log("refresh token catch", e)
//           return response;
//         }
//         console.log("refresh token response", res)
//         const { data } = res;
//         if (data.code == 200) {
//           await AsyncStorage.setItem(
//             USER_DATA,
//             JSON.stringify({ ...parsedUserData, ...data.data })
//           );
//           return apiInstance(originalRequest);
//         } else {
//           expireUserToken()
//           return response;
//         }
//       } else {
//         return response;
//       }
//     } else {
//       return response;
//     }
//   },
//   async function (error) {
//     Promise.reject(error);
//   });

// const refreshAccessToken = (userData) => {
//   console.log("refreshAccessToken api call");
//   if (!userData.refreshtoken) {
//     throw "refresh token missing";
//   }
//   let apiData = {
//     refreshtoken: userData.refreshtoken
//   }
//   return axios.post(Config.API_URL + "/sprintbeans-auth/mobile/v1/token/refresh", apiData);
// };

// const expireUserToken = async () => {
//   console.log("user logout due to expire token")
//   let old_token = await AsyncStorage.getItem(USER_DATA);
//   if (old_token && store) {
//     store.dispatch(appAction.logOutUser());
//   }
// };

export default apiInstance;
