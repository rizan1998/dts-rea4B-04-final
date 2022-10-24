import { configureStore } from "@reduxjs/toolkit";

import animeSlice from "../reducers/animeSlice";
// import { colorApi } from "../services/colorApi";
import { animeApi } from "../services/animeApi";

// kita membuat store atau brankas dari bank
// di sini kita bisa menyimpan state dalam satu objek atau single object
// untuk membuat store, perlu memberikan reducer dan initial state

// untuk redux toolkit, kita membuat store dengan fungsi configureStore
// configureStore menerima object yang berisi reducer dan preloadedState
// bentuknya {reducer: rootReducer, preloadedState: initialState}

const store = configureStore({
  reducer: {
    anime: animeSlice,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  // Menambahkan middleware untuk caching, invalidation, pooling
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
});

export default store;
