import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserEvents {
  event_id: string;
  user_id: string;
  event_title: string;
  user_name: string;
  event_description: string;
  latitude: number;
  longitude: number;
  time_stamp: string;
}

interface InitialState {
  loading: boolean;
  error: boolean;
  revived: boolean | string;
  user_id: string;
  events: UserEvents[];
}

const initialState: InitialState = {
  loading: false,
  error: false,
  revived: false,
  user_id: "",
  events: [
    {
      event_id: "",
      user_id: "",
      event_title: "",
      user_name: "",
      event_description: "",
      latitude: 0,
      longitude: 0,
      time_stamp: "",
    },
  ],
};

export const eventByUserId = createAsyncThunk(
  "eventByUserId/eventByUserId",
  async (userId: string, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/api-v1/events/me?user_id=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const eventByUserIdSlice = createSlice({
  name: "eventByUserId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(eventByUserId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(eventByUserId.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload.events;
      state.user_id = action.payload.user_id;
      state.revived = true;
    });
    builder.addCase(eventByUserId.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default eventByUserIdSlice.reducer;
