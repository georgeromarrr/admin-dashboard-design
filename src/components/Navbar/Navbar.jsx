import React, { useState, useEffect } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { UserMenu } from "./Components";

const Navbar = () => {
  const [themeMode, setThemeMode] = useState(false);
  const userTheme = JSON.parse(localStorage.getItem("theme"));

  useEffect(() => {
    if (userTheme === "dark") {
      setThemeMode(true);
    } else {
      setThemeMode(false);
    }
  }, []);

  return (
    <div className="select-none h-full px-10 flex justify-between items-center border border-black rounded-md bg-gray-50 dark:bg-neutral-900 dark:border-white dark:text-white">
      <div className="self-center">
        <p className="text-stone-800 font-ailerons text-4xl dark:text-white">
          Forbes Celebrities
        </p>
      </div>
      <div className="self-center">
        <div className="flex items-center gap-x-1">
          <p className="dark:text-white">Welcome,</p>
          <UserMenu username="Romar George Doinog" />
          <DarkMode onBtnClick={() => setThemeMode(!themeMode)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
