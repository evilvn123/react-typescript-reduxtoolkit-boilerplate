import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/configs/store";
import authApi from "./authApi";

export interface AuthenState {
  isAuth: boolean;

  isFetchingLogin: boolean;
  fetchLoginMsg: any;
}

const initialState: AuthenState = {
  isAuth: false,
  // state for login reducer
  isFetchingLogin: false,
  fetchLoginMsg: null,
};

export const fetchLogin = createAsyncThunk(
  "authen/fetchLogin",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await authApi.login(payload);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || error?.response || error
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Handle fetch login
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isAuth = false;
        state.isFetchingLogin = false;
        state.fetchLoginMsg = action.payload || action.error.message;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.isFetchingLogin = true;
        state.fetchLoginMsg = null;
      })
      .addCase(fetchLogin.fulfilled, (state) => {
        state.isAuth = true;
        state.isFetchingLogin = false;
        state.fetchLoginMsg = null;
      });
  },
});

// export const {} = authSlice.actions;

export const selectIsAuth: any = (state: RootState) => state.auth.isAuth;

export default authSlice.reducer;
