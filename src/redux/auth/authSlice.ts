import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { log } from "../../utils";

export interface UserData {
  fullName?: string;
  email: string;
  password: string;
  path: string;
}

interface AuthRecord {
  created: string;
  fail: boolean;
  token: string;
  user_id: string;
  username: string;
}
interface InitialState {
  loading: boolean;
  error: string | string;
  record: AuthRecord;
}

const initialState: InitialState = {
  loading: false,
  error: "",
  record: {
    created: "",
    fail: false,
    token: "",
    user_id: "",
    username: "",
  },
};

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
      AsyncStorage.setItem("token", data.record.token);

      return data;
    } catch (error) {
      log.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearUserState: (state) => {
      state.record = {
        created: "",
        fail: false,
        token: "",
        user_id: "",
        username: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.record = action.payload.record;
      state.loading = false;
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export const { clearUserState } = authSlice.actions;
export default authSlice.reducer;
