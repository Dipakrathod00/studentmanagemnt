import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: [],
  department: [],
};

const studentSlice = createSlice({
  name: "studenSlice",
  initialState,
  reducers: {
    Addstudent: (state, action) => {
      state.student = [...state.student, action.payload];
    },
    AddDepartment: (state, action) => {
      state.department = [...state.department, action.payload];
    },
    DeleteDepartment: (state, action) => {
      state.department = action.payload;
    },
    DeleteStudent: (state, action) => {
      state.student = action.payload;
    },
    UpdateStudent: (state, action) => {
      state.student = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  Addstudent,
  AddDepartment,
  DeleteDepartment,
  DeleteStudent,
  UpdateStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
