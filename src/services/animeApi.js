import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jikan.moe/v4",
  }),

  tagTypes: ["Color"],
  endpoints: (builder) => ({
    getColors: builder.query({
      query: () => "schedules",
      providesTags: ["Color"],
    }),
    getColorById: builder.query({
      query: (id) => `colors/${id}`,
    }),
    addColor: builder.mutation({
      query: (color) => ({
        url: "colors",
        method: "POST",
        body: color,
      }),
      // lakukan invalidate tag jika mutation ini terjadi
      // jadinya dia memberitahu kalau tag ini sudah invalid
      // tolong semua yang terkait di fetch ulang
      invalidatesTags: ["Color"],
    }),
    updateColor: builder.mutation({
      query: ({ id, color }) => ({
        url: `colors/${id}`,
        method: "PUT",
        body: color,
      }),
      invalidatesTags: ["Color"],
    }),
    deleteColor: builder.mutation({
      query: (id) => ({
        url: `colors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Color"],
    }),
  }),
});

export const { useGetColorsQuery, useGetColorByIdQuery, useAddColorMutation, useUpdateColorMutation, useDeleteColorMutation } = animeApi;
