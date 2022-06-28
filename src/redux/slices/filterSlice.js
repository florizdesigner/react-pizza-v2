import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
    desc: true,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSortDesc(state, action) {
      state.sort.desc = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setSortDesc } = filterSlice.actions;

export default filterSlice.reducer;
