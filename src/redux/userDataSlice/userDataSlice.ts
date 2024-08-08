import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  user_id: string;
  fullName: string;
  email: string;
  username: string;
}

interface InitialState {
  message: string;
  status: number;
  isVerify: boolean;
  loading: boolean;
  error: boolean;
  userInfo: UserInfo;
}

const initialState: InitialState = {
  message: "",
  status: 0,
  isVerify: false,
  loading: false,
  error: false,
  userInfo: {
    user_id: "",
    fullName: "",
    email: "",
    username: "",
  },
};

export const userInfoData = createAsyncThunk(
  "userData/userInfoData",
  async (_, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`http://localhost:3000/api-v1/users-data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = initialState.userInfo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userInfoData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userInfoData.fulfilled, (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.loading = false;
      state.error = false;
      state.isVerify = true;
      state.status = action.payload.status;
      state.message = action.payload.message;
    });
    builder.addCase(userInfoData.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { setUserInfo, clearUserInfo } = userDataSlice.actions;
export default userDataSlice.reducer;
