import { createSlice } from "@reduxjs/toolkit";
import { photoApi } from "../api/api";

const initialState = {
  frontal: {
    toUser: "",
  },
  profile: "",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageFrontal: (state, action) => {
      state.frontal.toUser = action.payload;
    },
    setImageProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setImageFrontal, setImageProfile } = imageSlice.actions;

export default imageSlice.reducer;
