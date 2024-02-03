
import AddTodoModul from "./AddTodoModul";
import TodoCord from "./todoCord";
import TodoFilter from "./todoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-10 ">
        <AddTodoModul />

        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCord />
          <TodoCord />
          <TodoCord />
          <TodoCord />
        </div>
          {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
          </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;