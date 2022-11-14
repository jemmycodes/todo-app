import { useState } from "react";

function Input(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const setContentHandler = (e) => {
    setContent(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    const tasks = {
      title: title,
      todo: content,
      date: new Date(),
    };
    console.log(tasks.date);
    props.onAddTodoHandler(tasks);
    setContent("");
    setTitle("");
  };

  return (
    <form className="flex flex-col justify-center items-center  gap-12">
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div className="space-x-8">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={setTitleHandler}
          />
        </div>
        <div className="space-x-8">
          <label htmlFor="text">Content:</label>
          <input
            type="text"
            id="text"
            value={content}
            className="w-96"
            onChange={setContentHandler}
          />
        </div>
      </div>
      <div className="space-x-8">
        <button className="bg-red-700" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          type="submit"
          onClick={addTaskHandler}
          className="bg-iconsColor"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Input;
