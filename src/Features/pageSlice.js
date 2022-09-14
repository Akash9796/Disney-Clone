const { createSlice } = require("@reduxjs/toolkit");
const initialState = 0;

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    prev(state, action) {
        console.log(action.payload)
      return action.payload;
    },
    next(state, action) {
        console.log(action.payload)

      return action.payload;
    },
  },
});

export const { prev, next } = pageSlice.actions;
export default pageSlice.reducer;
