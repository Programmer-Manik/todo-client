import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
   reducerPath: 'baseApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'mongodb://localhost:5000' }),
   endpoints: (builder) => ({
         getTodos: builder.query({
          query:() => ({
            url:'/tasks',
            method:'GET',
          }),
         }),
         addTodos: builder.mutation({
          query:(data) => ({
            url:'/tasks',
            method:'POST',
            body:data,
          })
         })  
     }),
});

export const {useGetTodosQuery,useAddTodosMutation} = baseApi;