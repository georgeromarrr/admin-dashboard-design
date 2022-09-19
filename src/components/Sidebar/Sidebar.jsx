import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  CelebritiesIcon,
  CountryIcon,
  CareerIcon,
  ChartsIcon,
  FileIcon,
} from "../../assets/Icons/Icons";

export const SideNav = [
  { name: "Home", icons: <HomeIcon />, page: "home" },
  { name: "Celebrities", icons: <CelebritiesIcon />, page: "celebrities" },
  { name: "Country", icons: <CountryIcon />, page: "country" },
  { name: "Career", icons: <CareerIcon />, page: "career" },
  { name: "Charts", icons: <ChartsIcon />, page: "charts" },
  { name: "File", icons: <FileIcon />, page: "charts" },
];

const Sidebar = () => {
  const redirectTo = useNavigate();
  // const useDropdown = useClickOutside(() => {
  //   setOpen(false);
  // });

  return (
    <div className="select-none h-full w-full static py-8 px-6 rounded-md border border-black bg-white dark:bg-neutral-900 dark:border-white dark:text-white ">
      <div className="space-y-2">
        {SideNav.map((item) => (
          <div
            key={item.name}
            className="flex items-center px-4 p-2 cursor-pointer hover:bg-neutral-200 rounded-lg dark:hover:bg-neutral-700"
          >
            <div className="w-full flex items-start gap-x-4">
              {item.icons}
              <div className="text-lg self-center">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
