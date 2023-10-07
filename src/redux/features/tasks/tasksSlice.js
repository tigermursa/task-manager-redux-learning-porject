import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status:"pending" ,...payload });
      } else {
        const lastElement = state.tasks[state.tasks.length - 1];
        state.tasks.push({ id: lastElement.id + 1,status:"pending", ...payload });
      }
    },
    removeTask: (state, payload) => {
      state.tasks.filter((item)=> item.id !== payload)
    }
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
