import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URLSearchParams } from "url";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "mongodb://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if(priority){
          params.append('priority',priority)
        }
        return {
          url: "/tasks",
          method: "GET",
          params:params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodos: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodos: builder.mutation({
      query: (options) => {
        console.log(options.data);
        return {
          url: `/task/${options.id}`,
          method: "PUT",
          body:options.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { 
  useGetTodosQuery, 
  useAddTodosMutation, 
  useUpdateTodosMutation
 } = baseApi;
