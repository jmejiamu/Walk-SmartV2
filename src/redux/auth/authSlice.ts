import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { log } from "../../utils";

export interface UserData {
  fullName?: string;
  email: string;
  password: string;
  path: string;
}

export const authUser = createAsyncThunk(
  "auth/authUser",
  async (userData: UserData, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api-v1${userData.path}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      log.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    error: "",
  },
  reducers: {
    clearUserState: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

// export const authActions = authSlice.actions;
export default authSlice.reducer;
