import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      name: "Общий рейтинг",
      score: 0,
    },
    {
      name: "Подбородок",
      score: 0,
    },
    {
      name: "Кожа",
      score: 0,
    },
    {
      name: "Волосы",
      score: 0,
    },
    {
      name: "Глаза",
      score: 0,
    },
    {
      name: "Симметрия",
      score: 0,
    },
  ],
  info: [
    {
      name: "Форма лица",
      score: 0,
    },
    {
      name: "Угол глаз",
      score: 0,
    },
    {
      name: "Форма глаз",
      score: 0,
    },
    {
      name: "Тип глаз",
      score: 0,
    },
  ],
  userSession: "",
  userRefferals: 0,
  userRefferalLink:
    "https://t.me/Looksmax_test_bot?start=455aaed3-9e62-4bf7-876d-9e4b455c2d74",
  overallRating: 70,
  isLoading: true,
};

function calcOverallRating(arr) {
  return arr.reduce((sum, item) => sum + item.score, 0) / arr.length;
}
export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setStatistics: (state, action) => {
      action.payload.forEach((item) => {
        const index = state.items.findIndex(
          (el) => el.name.toLowerCase() === item.name
        );
        if (index !== -1) {
          state.items.splice(index, 1, item);
        } else {
          const infoIndex = state.info.findIndex(
            (el) => el.name.toLowerCase() === item.name
          );
          if (infoIndex !== -1) {
            state.info.splice(infoIndex, 1, item);
          }
        }
      });
      state.overallRating = `${Math.round(calcOverallRating(state.items))}`;
    },
    setUserSession: (state, action) => {
      state.userSession = action.payload;
    },
    setUserRefferalls: (state, action) => {
      state.userRefferals = action.payload;
    },
    setUserRefferallLink: (state, action) => {
      state.userRefferalLink = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setStatistics,
  setUserSession,
  setUserRefferalls,
  setUserRefferallLink,
  setLoadingStatus,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
