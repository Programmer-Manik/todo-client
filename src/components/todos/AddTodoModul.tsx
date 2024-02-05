import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch,  } from "@/Redux/hooks";
import { addTodo } from "@/Redux/fuatures/todoSlice";
import { useAddTodosMutation } from "@/Redux/api/api";
const AddTodoModul = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  //for local state management
  //const Dispatch = useAppDispatch()

  // for server
  //? [actualFunctionPost, {data , isLoading, isError}] =useAddTodosMutation();
  const [addTodo, {data ,isLoading, isError , isSuccess}] = useAddTodosMutation();
  console.log({data,isLoading, isError, isSuccess,})

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    //for local state management
    // const randomString = Math.random().toString(36).substring(2, 7);
    // const taskDetails = {
    //   id: randomString,
    //   title: task,
    //   description: description,
    // };
    //Dispatch(addTodo(taskDetails))
    
    //for server 
    const taskDetails = {
        title: task,
        description: description,
        //priority
      };
    addTodo(taskDetails)
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          add todo{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="Task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="Description"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModul;
