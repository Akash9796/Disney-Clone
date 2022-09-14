const { createSlice } = require("@reduxjs/toolkit");
const initialState = "";

const popularSlice = createSlice({
  name: "popular",
  initialState : "day",
  reducers: {
    popular(state, action) {
        console.log(action.payload)

      return action.payload;
    },
  },
});

export const {popular } = popularSlice.actions;
export default popularSlice.reducer;
