import TodoContainer from "@/components/todos/todoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl py-5 font-semibold">MY Todo Cord</h1>
     <TodoContainer/>
    </Container>
  );
};

export default Todo;
