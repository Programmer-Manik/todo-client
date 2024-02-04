import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type tTodo = {
   id:string;
   title:string;
   description:string;
   isCompleted?:boolean;
}
type TInitialState ={
   todos:tTodo[];
}
const initialState:TInitialState = {
   todos: [],
}
 const todoSlice = createSlice({
   name:'todo',
   initialState,
   reducers:{
      addTodo:(state, action:PayloadAction<tTodo>) => {
         state.todos.push({...action.payload, 
            isCompleted:false});
      },
      removeTodo:(state, action:PayloadAction<string>) => {
       state.todos =  state.todos.filter((item) => item.id !== action.payload);
      },
      toggleComplete:(state, action:PayloadAction<string>) => {
         const task = state.todos.find((item) => item.id === action.payload);
         task!.isCompleted == !task?.isCompleted;
      }
   },
})

export const {addTodo,removeTodo, toggleComplete} = todoSlice.actions;

export default todoSlice.reducer