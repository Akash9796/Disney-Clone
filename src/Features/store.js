import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import movieReducer from "./movieSlice";
import genreReducer from "./genreSlice";
import popularReducer from "./popularSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    movies: movieReducer,
    genre: genreReducer,
    popular: popularReducer,
    search: searchReducer,
  },
});
