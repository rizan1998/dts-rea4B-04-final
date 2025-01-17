import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jikan.moe/v4",
  }),

  tagTypes: ["Color"],
  endpoints: (builder) => ({
    getColors: builder.query({
      query: () => "anime",
      providesTags: ["Color"],
    }),
    getColorById: builder.query({
      query: (id) => `anime/${id}/full`,
    }),
    searchById: builder.query({
      query: (id) => `anime/${id}`,
    }),
  }),
});

export const { useGetColorsQuery, useGetColorByIdQuery, useSearchByIdQuery } = animeApi;
