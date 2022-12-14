import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import DateTime from "../DateTime/DateTime";
import Sidebar from "../Sidebar/Sidebar";

const PageTemplate = ({ children }) => {
  return (
    <>
      <div className="dark:bg-neutral-900 bg-white">
        <div className="flex gap-x-1 p-1 relative inset-0 h-screen">
          <div className="w-[15%] static flex flex-col space-y-1">
            <div className="h-[10%]">
              <DateTime />
            </div>
            <div className="h-full text-black">
              <Sidebar />
            </div>
          </div>

          <div className="w-full static flex flex-col space-y-1">
            <div className="h-[10%]">
              <Navbar />
            </div>
            <div className="h-full">
              <div className="border border-black rounded-md bg-gray-50 dark:bg-neutral-900 dark:border-white dark:text-white select-none h-full">
                <div className="m-12 relative">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;
