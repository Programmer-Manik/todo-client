import { Button } from "../ui/button";
import TodoCord from "./todoCord";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-10 ">
        <Button className="bg-primary-gradient text-xl font-semibold">add todo </Button>
        <Button>filter</Button>
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
