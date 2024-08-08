import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface EventData {
  event_title: string;
  event_description: string;
  user_id: string;
  latitude: number;
  longitude: number;
  user_name: string;
}

interface InitialState {
  error: boolean;
  created: boolean;
  message: string;
  loading: boolean;
}

const initialState: InitialState = {
  error: false,
  created: false,
  message: "",
  loading: false,
};

export const addEvent = createAsyncThunk(
  "addEvent/addEvent",
  async (eventData: EventData, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`http://localhost:3000/api-v1/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AddEventsSlice = createSlice({
  name: "addEvent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addEvent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.created = true;
      state.message = action.payload.message;
    });
    builder.addCase(addEvent.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default AddEventsSlice.reducer;
