import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useTodos } from "../context/UserContext";

const Todolist = () => {
  const [newWork, setNewWork] = useState<string | number>("");

  const { todo, setTodo } = useTodos();

  //getting the todo data
  useEffect(() => {
    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
    // Initialize as an empty array if no todos are stored
    else {
      setTodo([]);
    }
  }, [setTodo]);

  //adding the todo in local storage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWork.trim() === "") return;
    const newTodoItem = {
      id: todo.length ? todo[todo.length - 1].id + 1 : 1,
      work: newWork,
    };
    setTodo([...todo, newTodoItem]);
    setNewWork("");
  };

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="border-[1px] border-red-500 rounded-lg p-2 text-xl">
        <h1 className="text-center my-4 text-2xl font-bold">To Do List</h1>
        <div className="my- flex gap-4">
          <input
            type="text"
            placeholder="Enter the task"
            value={newWork}
            onChange={(e) => setNewWork(e.target.value)}
            className="text-black outline-none p-2 border-[1px] border-red-300 rounded-lg"
          />
          <button onClick={addTodo} className="bg-blue-500 rounded-lg p-1">
            Add
          </button>
        </div>
        {todo.map((item) => (
          <div key={item.id} className="my-4 flex justify-between">
            <p>{item.work}</p>
            <button onClick={() => deleteTodo(item.id)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
