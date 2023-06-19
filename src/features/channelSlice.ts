import { createSlice } from "@reduxjs/toolkit";
import { initialChannelState } from "../Types";

const initialState: initialChannelState = {
  channelId: null,
  channelName: null,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelInfo: (state, { payload }) => {
      state.channelId = payload.channelId;
      state.channelName = payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;
