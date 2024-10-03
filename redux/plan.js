import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      title: "Стайлинг овала лица",
      priority: "Первый приоритет",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius consequuntur blanditiis deleniti animi delectus, aut officia ad facilis cumque doloribus consectetur culpa sed doloremque hic ullam impedit dolorem atque cum?",
    },
    {
      title: "Приведение в порядок бровей",
      priority: "Второй приоритет",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius consequuntur blanditiis deleniti animi delectus, aut officia ad facilis cumque doloribus consectetur culpa sed doloremque hic ullam impedit dolorem atque cum?",
    },
    {
      title: "Корректировка подбородка",
      priority: "Третий приоритет",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius consequuntur blanditiis deleniti animi delectus, aut officia ad facilis cumque doloribus consectetur culpa sed doloremque hic ullam impedit dolorem atque cum?",
    },
    {
      title: "Уход за кожей",
      priority: "Четвертый приоритет",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius consequuntur blanditiis deleniti animi delectus, aut officia ad facilis cumque doloribus consectetur culpa sed doloremque hic ullam impedit dolorem atque cum?",
    },
  ],
  practice: [
    {
      text: "Ежедневная практика",
      isDone: false,
    },
    {
      text: "Приведение в порядок бровей",
      isDone: false,
    },
    {
      text: "Корректировка подбородка",
      isDone: false,
    },
    {
      text: "Уход за кожей",
      isDone: false,
    },
  ],
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.items = [...action.payload];
    },
    setPracticeToggle: (state, action) => {
      const currentStatus = state.practice[action.payload].isDone;
      state.practice[action.payload].isDone = !currentStatus;
    },
  },
});

export const { setPlan, setPracticeToggle } = planSlice.actions;

export default planSlice.reducer;
