import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
   reducerPath: 'baseApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'mongodb://localhost:5000' }),
   tagTypes:['todo'],
   endpoints: (builder) => ({
         getTodos: builder.query({
          query:() => ({
            url:'/tasks',
            method:'GET',
          }),
          providesTags:['todo']
         }),
         addTodos: builder.mutation({
          query:(data) => {
            console.log(data);
            return{
              url:'/tasks',
              method:'POST',
              body:data,
            };
          },
          invalidatesTags:['todo']
         }),
     }),
});

export const {useGetTodosQuery,useAddTodosMutation} = baseApi;