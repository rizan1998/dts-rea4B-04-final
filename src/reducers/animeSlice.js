import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { user: {}, balance: 100000, loading: false, error: "" };

export const animeAsync = createAsyncThunk("ANIME/FETCH_USER", async (malId) => {
  const { data: axiosData } = await axios.get(`https://api.jikan.moe/v4/anime/${malId}/full`);
  return axiosData.data;
});

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    WITHDRAW: (state, action) => {
      if (state.balance >= action.payload.amount) {
        state.balance -= action.payload.amount;
      } else {
        throw new Error("insufficient balance");
      }
    },
    DEPOSIT: (state, action) => {
      state.balance += action.payload.amount;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(animeAsync.rejected, (state, error) => {
        console.log("fail to get user");
        state.error = error.message;
        state.loading = false;
      })
      .addCase(animeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(animeAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      });
  },
});

export const selectUser = (state) => state.anime.user;
export default animeSlice.reducer;
