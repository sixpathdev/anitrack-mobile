import Axios from "@/services/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  wallet_balance?: number;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const loadUser = createAsyncThunk("auth/loadUser", async () => {
  const token = await SecureStore.getItemAsync("auth_token");
  const userStr = await SecureStore.getItemAsync("auth_user");

  if (token && userStr) {
    return { token, user: JSON.parse(userStr) };
  }
  return null;
});

// Async Thunk for Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`/auth/login`, userData);
      // key into data.data if it exists, otherwise fallback to response.data
      const responseData = response.data?.data || response.data;
      const { token, user } = responseData || {};

      if (!token || !user) {
        return rejectWithValue(
          `Invalid response from server. Keys in data: ${Object.keys(responseData || {}).join(", ")}`,
        );
      }

      await SecureStore.setItemAsync("auth_token", token);
      await SecureStore.setItemAsync("auth_user", JSON.stringify(user));

      return { token, user };
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message || "Login failed");
      }
      return rejectWithValue(error.message);
    }
  },
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`/auth/register`, userData);
      // return response.data;
      // key into data.data if it exists, otherwise fallback to response.data
      const responseData = response.data?.data;
      const { token, user } = responseData || {};

      if (!token || !user) {
        return rejectWithValue(
          `Invalid response from server. Keys in data: ${Object.keys(responseData || {}).join(", ")}`,
        );
      }

      await SecureStore.setItemAsync("auth_token", token);
      await SecureStore.setItemAsync("auth_user", JSON.stringify(user));

      return {
        message: response.data?.message || "Registration successful",
        user: user,
      };
    } catch (error: any) {
      if (error.response && error.response.data) {
        // Return structured error if valid, or generic message
        return rejectWithValue(
          error.response.data.message || "Registration failed",
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

export const verifyEmailAccount = createAsyncThunk(
  "auth/verifyEmailAccount",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`/auth/verify-user/email`, userData);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        // Return structured error if valid, or generic message
        return rejectWithValue(
          error.response.data.message || "Registration failed",
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

export const resendVerificationCode = createAsyncThunk(
  "auth/resendVerificationCode",
  async (userData: any, { rejectWithValue }) => {
    try {
      // await SecureStore.setItemAsync("auth_token", token);
      // console.log("token ", await SecureStore.getItemAsync("auth_token"));
      const response = await Axios.post(`/auth/resend-code`, userData);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        // Return structured error if valid, or generic message
        return rejectWithValue(error.response.data.message || "Request failed");
      }
      return rejectWithValue(error.message);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`/auth/request-password`, userData);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        // Return structured error if valid, or generic message
        return rejectWithValue(
          error.response.data.message || "Registration failed",
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`/auth/reset-password`, userData);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        // Return structured error if valid, or generic message
        return rejectWithValue(
          error.response.data.message || "Registration failed",
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      // Manual login reducer if needed (e.g., for testing or forced login)
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.error = null;

      SecureStore.setItemAsync("auth_token", action.payload.token);
      SecureStore.setItemAsync(
        "auth_user",
        JSON.stringify(action.payload.user),
      );
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;

      SecureStore.deleteItemAsync("auth_token");
      SecureStore.deleteItemAsync("auth_user");
    },
    clearError: (state) => {
      state.error = null;
    },
    updateWalletBalance: (state, action: PayloadAction<number>) => {
      if (state.user) {
        const newUser = { ...state.user, wallet_balance: action.payload };
        state.user = newUser;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Load User
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuthenticated = true;
          state.token = action.payload.token;
          state.user = action.payload.user;
        } else {
          state.isAuthenticated = false;
          state.token = null;
          state.user = null;
        }
        state.isLoading = false;
      })
      .addCase(loadUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
        state.isLoading = false;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(verifyEmailAccount.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyEmailAccount.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyEmailAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(resendVerificationCode.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(resendVerificationCode.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(resendVerificationCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export const { login, logout, clearError, updateWalletBalance } =
  authSlice.actions;
export default authSlice.reducer;
