import { useState } from "react";
import Input from "./Input";

function Form(props) {
  const saveToDoHandler = (todo) => {
    const task = {
      ...todo,
    };
    props.onAddTodo(task);
  };

  const [isAdding, setIsAdding] = useState(false);

  const todoEditingHandler = () => {
    setIsAdding(true);
  };

  const cancelTaskHandler = () => {
    setIsAdding(false);
  };

  return (
    <section>
      {!isAdding && (
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="bg-iconsColor"
            onClick={todoEditingHandler}
          >
            Add Task
          </button>
        </div>
      )}
      {isAdding && (
        <Input
          onAddTodoHandler={saveToDoHandler}
          onCancel={cancelTaskHandler}
        />
      )}
    </section>
  );
}

export default Form;
