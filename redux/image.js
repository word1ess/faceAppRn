import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  frontal: {
    toUser: "",
    toServer: "",
  },
  profile: {
    toUser: "",
    toServer: "",
  },
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageFrontal: (state, action) => {
      const [toUserFrontal, toServerFrontal] = action.payload;
      state.frontal = {
        toUser: toUserFrontal,
        toServer: toServerFrontal,
      };
    },
    setImageProfile: (state, action) => {
      const [toUserProfile, toServerProfile] = action.payload;
      state.profile = {
        toUser: toUserProfile,
        toServer: toServerProfile,
      };
    },
  },
});

export const { setImageFrontal, setImageProfile } = imageSlice.actions;

export default imageSlice.reducer;
