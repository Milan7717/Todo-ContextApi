import React from "react";
import { useTodos } from "../context/UserContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const Thememode = () => {
  const { theme, setTheme } = useTodos();

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="py-10">
      {theme ? (
        <button
          onClick={changeTheme}
          className=" mx-10 flex justify-center bg-blue-500 rounded-lg p-2"
        >
          
          <MdOutlineDarkMode />Light Mode
        </button>
      ) : (
        <button
          onClick={changeTheme}
          className=" mx-10 flex justify-center bg-blue-500 rounded-lg p-2"
        >
          
          <MdDarkMode /> Dark Mode
        </button>
      )}
    </div>
  );
};

export default Thememode;
