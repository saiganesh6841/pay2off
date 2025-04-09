import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "user", // vendor , marketer
};
export const pageTypeSlice = createSlice({
  name: "PAGE_TYPE",
  initialState,
  reducers: {
    handleChangePage: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { handleChangePage } = pageTypeSlice.actions;

export default pageTypeSlice.reducer;
