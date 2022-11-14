import ToDoItem from "./ToDoItem";

function ToDoContainer({ data }) {
  if (data.length === 0) {
    return <p>You have no task yet, try adding one</p>;
  }

  const todoTag = data.map((items, index) => (
    <ToDoItem data={items} key={index + 1} />
  ));
  return (
    <section className="bg-eachToDoColor px-5 py-10 space-y-14">
      {todoTag}
    </section>
  );
}

export default ToDoContainer;
