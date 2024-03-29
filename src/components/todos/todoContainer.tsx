
// import { useAppSelector } from "@/Redux/hooks";
import { useState } from "react";
import AddTodoModul from "./AddTodoModul";
import TodoCord from "./todoCord";
import TodoFilter from "./todoFilter";
import { useGetTodosQuery } from "@/Redux/api/api";

const TodoContainer = () => {
  const [priority , setPriority] = useState('')

  //form local state
  // const {todos} = useAppSelector((state) => state.todos )
  
  
  //from server
  // const {data:todos,isLoading,} = useGetTodosQuery(undefined,{pollingInterval:1000});
  const {data:todos,isLoading,} = useGetTodosQuery(priority);
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <div>
      <div className="flex justify-between mb-10 ">
        <AddTodoModul />

        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
          {/* {todos.map((item) => <TodoCord {...item}/>)} */}
          {todos?.data?.map((item) => <TodoCord {...item}/>)}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
        </div>
          {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
          </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
