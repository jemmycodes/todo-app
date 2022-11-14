function ToDoItem(props) {
  const month = props.data.date.toLocaleString("en-US", { month: "long" });
  const day = props.data.date.toLocaleString("en-US", { day: "2-digit" });
  const hours = props.data.date.getHours();
  const min = props.data.date.getMinutes();
  const year = props.data.date.getFullYear();
  return (
    <article className="relative bg-bgColor p-8 space-y-4 rounded-2xl">
      <span className="space-x-7 mb-10 flex ">
        <p>
          Task made on{" "}
          <span>
            {year}-{month}-{day}
          </span>{" "}
          at {hours.toString().padStart(2, "0")}:
          {min.toString().padStart(2, "0")}
        </p>
      </span>
      <h1 className="text-4xl">
        Title: <span className="uppercase">{props.data.title}</span>
      </h1>
      <p>
        Content: <span>{props.data.todo}</span>
      </p>
    </article>
  );
}

export default ToDoItem;
