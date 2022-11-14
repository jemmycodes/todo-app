import { useState } from "react";
import Form from "./Components/Input/Form";
import ToDoContainer from "./Components/ToDo/ToDoContainer";

function App() {
  const TO_DO = [];

  const [todoList, setToDo] = useState(TO_DO);
  const addToDoHandler = (todo) => {
    setToDo((prevToDo) => [todo, ...prevToDo]);
  };

  return (
    <main className="flex flex-col space-y-24">
      <Form onAddTodo={addToDoHandler} />
      <ToDoContainer data={todoList} />
    </main>
  );
}

export default App;
