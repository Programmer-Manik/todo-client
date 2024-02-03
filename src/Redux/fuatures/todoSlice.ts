import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type tTodo = {
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
      }
   },
})

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer