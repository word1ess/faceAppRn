import { createSlice } from "@reduxjs/toolkit";
import { photoApi } from "../api/api";

const initialState = {
  frontal: {
    toUser: "",
    toServer: "",
  },
  profile: "",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageFrontal: (state, action) => {
      Object.keys(state.frontal).forEach(function (photo, i, arr) {
        state.frontal[photo] = action.payload[i];
      });
      let stat = photoApi.postImageApi("1", state.frontal.toServer);
    },
    setImageProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setImageFrontal, setImageProfile } = imageSlice.actions;

export default imageSlice.reducer;
