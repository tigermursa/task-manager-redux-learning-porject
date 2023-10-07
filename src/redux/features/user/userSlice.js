import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Mursalin',
    email : "mursalin@gmail.com",
    userTasks: [],
    
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    
  },
});

// export const { addTask, updateStatus,removeTask } = tasksSlice.actions;
export default userSlice.reducer;
