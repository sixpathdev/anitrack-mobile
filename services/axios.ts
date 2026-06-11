import { BASE_URL } from "@/constants/payment";
import axios from "axios";

const API_URL = BASE_URL;

const Axios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

export const setAxiosAuthToken = async (token?: string | null) => {
  try {
    let authToken = token;

    // if (!authToken) {
    //   // console.log("[Axios] No token provided, fetching from SecureStore...");
    //   try {
    //     authToken = await SecureStore.getItemAsync("auth_token");
    //     if (authToken) {
    //     } else {
    //       // console.warn("[Axios] No token found in SecureStore");
    //     }
    //   } catch (storageError) {
    //     // console.error("[Axios] SecureStore error:", storageError);
    //   }
    // }

    if (authToken) {
      Axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
      // console.log("[Axios] ✅ Authorization header set successfully");
      return authToken;
    } else {
      delete Axios.defaults.headers.common["Authorization"];
      // console.warn("[Axios] ⚠️ No token available to set");
      return null;
    }
  } catch (error) {
    // console.error("[Axios] Error setting auth token:", error);
    return null;
  }
};

Axios.interceptors.request.use(
  (config) => {
    const authHeader = Axios.defaults.headers.common["Authorization"];
    if (authHeader) {
      config.headers.Authorization = authHeader;
      // console.log("[Axios Request] Token from defaults for:", config.url);
    }
    // else {
    //   const isPublicRoute =
    //     config.url?.includes("/auth/") ||
    //     config.url?.includes("login") ||
    //     config.url?.includes("register");
    //   if (isPublicRoute) {

    //   } else {

    //   }
    // }

    // ✅ Let Axios set Content-Type automatically for FormData (includes boundary)
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      const errorMessage =
        error.response?.message || error.response?.data?.message || "";
      const isTokenError =
        errorMessage.toLowerCase().includes("token") ||
        errorMessage.toLowerCase().includes("invalid") ||
        errorMessage.toLowerCase().includes("expired") ||
        errorMessage.toLowerCase().includes("unauthenticated") ||
        errorMessage.toLowerCase().includes("Unauthenticated") ||
        errorMessage.toLowerCase().includes("revoked");

      if (isTokenError) {
        // console.log("[Axios Response] Token error detected, logging out...");
        const { store } = await import("../store");
        const { logout } = await import("../store/slices/authSlice");
        store.dispatch(logout());
      } else {
      }
    }
    return Promise.reject(error);
  },
);

export default Axios;
