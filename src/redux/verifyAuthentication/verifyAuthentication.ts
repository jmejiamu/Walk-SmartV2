import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { log } from "../../utils";

export const isAuth = createAsyncThunk("auth/isAuth", async (_, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api-v1/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    log.error(error);
    return thunkAPI.rejectWithValue("Unauthorized");
  }
});

interface InitialState {
  loading: boolean;
  error: string | boolean;
  isAuthenticated: boolean;
  status: string | boolean;
  message: string;
}

const initialState: InitialState = {
  loading: false,
  error: false,
  isAuthenticated: false,
  status: "",
  message: "",
};

const verifyAuthenticationSlice = createSlice({
  name: "verifyAuthentication",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(isAuth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(isAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.status = action.payload.status;
      state.message = action.payload.message;
    });
    builder.addCase(isAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addMatcher(isRejectedWithValue, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setAuth } = verifyAuthenticationSlice.actions;

export default verifyAuthenticationSlice.reducer;
