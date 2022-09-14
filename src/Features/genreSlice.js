const { createSlice } = require("@reduxjs/toolkit");
const initialState = 0;

const genreSlice = createSlice({
  name: "genre",
  initialState : "trending/all",
  reducers: {
    genre(state, action) {
        console.log(action.payload)
      return action.payload;
    },
  },
});

export const { genre } = genreSlice.actions;
export default genreSlice.reducer;
