import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      name: "1. Общий рейтинг",
      score: 0,
    },
    {
      name: "2. Подбородок",
      score: 0,
    },
    {
      name: "3. Кожа",
      score: 0,
    },
    {
      name: "4. Волосы",
      score: 0,
    },
    {
      name: "5. Глаза",
      score: 0,
    },
    {
      name: "6. Симметрия",
      score: 0,
    },
  ],
  info: [
    {
      name: "7. Форма лица",
      score: 0,
    },
    {
      name: "8. Угол глаз",
      score: 0,
    },
    {
      name: "9. Форма глаз",
      score: 0,
    },
    {
      name: "10. Тип глаз",
      score: 0,
    },
  ],
  userSession: "ahpbPzrKjf7NWBZ0ZV2eBlcW6d0QXbxIIJ+2GZW2/4U=",
  userRefferals: 0,
  userRefferalLink: 0,
  overallRating: 70,
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
        const index = state.items.findIndex((el) => el.name === item.name);

        if (index !== -1) {
          // Обновляем существующий элемент в массиве items
          state.items.splice(index, 1, item);
        } else {
          // Обновляем существующий элемент в массиве info
          const infoIndex = state.info.findIndex((el) => el.name === item.name);
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setStatistics,
  setUserSession,
  setUserRefferalls,
  setUserRefferallLink,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
