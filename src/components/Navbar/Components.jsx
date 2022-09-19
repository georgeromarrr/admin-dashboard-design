import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

//icons
import { ArrowIcon } from "../../assets/Icons/Icons";

// nav components

// user menu dropdown
export const UserMenu = (props) => {
  const [isOpen, setOpen] = useState(false);
  // const redirect = useNavigate();

  return (
    <div className="relative">
      <button
        type="button"
        className="text-black flex items-center hover:bg-neutral-200 p-2 rounded-lg relative dark:text-white dark:hover:bg-neutral-700"
        onClick={() => setOpen(!isOpen)}
      >
        <p className="font-semibold pr-1 dark:text-white">{props.username}</p>
        <span className={isOpen ? "origin-center rotate-180" : ""}>
          <ArrowIcon />
        </span>
      </button>
      {isOpen && (
        <div className="text-black absolute border border-black bg-white right-0 top-11 w-full rounded-sm divide-y divide-gray-400 shadow-xl px-1 dark:border-white dark:bg-neutral-900 dark:text-white">
          <p className="text-sm italic p-4">Owner</p>
          <ul className="p-2 text-sm">
            <li className="font-semibold cursor-pointer hover:bg-neutral-200 hover:text-neutral-700 p-2 rounded-sm dark:hover:bg-neutral-700 dark:hover:text-neutral-200">
              Settings
            </li>
            <li className="font-semibold cursor-pointer hover:bg-neutral-200 hover:text-neutral-700 p-2 rounded-sm dark:hover:bg-neutral-700 dark:hover:text-neutral-200">
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
