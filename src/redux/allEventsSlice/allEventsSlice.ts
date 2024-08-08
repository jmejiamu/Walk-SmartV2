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
  message: string;
  events: UserEvents[];
}

const initialState: InitialState = {
  loading: false,
  error: false,
  message: "",
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

export const allUsersEvents = createAsyncThunk(
  "eventByUserId/eventByUserId",
  async (_, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`http://localhost:3000/api-v1/events/all`, {
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

export const allUsersEventsSlice = createSlice({
  name: "eventByUserId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allUsersEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allUsersEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload.events;
      state.message = action.payload.message;
    });
    builder.addCase(allUsersEvents.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default allUsersEventsSlice.reducer;
