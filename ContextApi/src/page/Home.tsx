import React from "react";
import Todolist from "../components/Todolist";
import Thememode from "../components/Thememode";
import { useTodos } from "../context/UserContext";

const Home = () => {
  const { theme } = useTodos();
  return (
    <div
      className={`${
        theme ? "min-h-screen text-white bg-black" : "min-h-screen "
      }`}
    >
      <Thememode />
      <Todolist />
    </div>
  );
};

export default Home;
