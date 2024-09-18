import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      name: "1. Общий рейтинг",
      description:
        "Общее состояние лиц изображений гармонично, симметрично и выглядит естественно. Качество работы высокое с точки зрения пропорций и симметрии.",
      score: 90,
    },
    {
      name: "2. Подбородок",
      description:
        "У обоих изображений подбородок хорошо вписывается в общую форму лица, выглядит естественно и пропорционально.",
      score: 85,
    },
    {
      name: "3. Кожа",
      description:
        "Кожа на обеих изображениях выглядит гладкой, хорошо текстурированной и естественной по тону.",
      score: 88,
    },
    {
      name: "4. Волосы",
      description:
        "Волосы густые и текстурированные. Укладка выглядит естественно и гармонично. Цвет волос также натуральный.",
      score: 82,
    },
    {
      name: "5. Глаза",
      description:
        "Глаза у обоих изображений симметричны, естественны и хорошо вписываются в общую композицию лица.",
      score: 90,
    },
    {
      name: "6. Симметрия",
      description:
        "Лица на изображениях симметричны, что придает им гармоничный и естественный вид.",
      score: 92,
    },
  ],
  info: [
    {
      name: "7. Форма лица",
      description:
        "Форма лиц первого изображения можно охарактеризовать как Овал. Форма лица второго изображения ближе к Овальному типу.",
      score: 0,
    },
    {
      name: "8. Угол глаз",
      description:
        "Уголки глаз обоих изображений приподняты, что придает общий позитивный и энергичный вид.",
      score: 0,
    },
    {
      name: "9. Форма глаз",
      description:
        "Глаза на обоих изображениях миндалевидные, что придает им естественность и симметрию.",
      score: 0,
    },
    {
      name: "10. Тип глаз",
      description:
        "Тип глаз на первом изображении можно охарактеризовать как Европейский, а на втором - как Восточный.",
      score: 0,
    },
  ],

  overallRating: 70,
};

function calcOverallRating(arr) {
  return arr.reduce((sum, item) => sum + item.score, 0) / arr.length;
}

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getStatistics: (state, action) => {
      state.items = { ...action.payload };
      state.overallRating = calcOverallRating(state.items);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getStatistics } = statisticsSlice.actions;

export default statisticsSlice.reducer;
