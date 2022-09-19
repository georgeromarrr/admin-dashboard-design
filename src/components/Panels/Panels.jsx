import React from "react";

const Panels = () => {
  return (
    <div className="grid grid-cols-3 gap-12 dark:text-white m-12">
      <div className="p-3 bg-inherit rounded-md text-center border border-black h-full dark:border-white ">
        <div className="space-y-3 m-3">
          <h1 className="text-2xl text-center font-semibold uppercase">
            Celebrity with Most Entries
          </h1>
          <p className="text-2xl text-center uppercase">James Bond</p>
        </div>
      </div>
      <div className="p-3 bg-inherit rounded-md text-center border border-black h-full dark:border-white ">
        <div className="space-y-3 m-3">
          <h1 className="text-2xl text-center font-semibold uppercase">
            Country with Most Entries
          </h1>
          <p className="text-2xl text-center uppercase">America</p>
        </div>
      </div>
      <div className="p-3 bg-inherit rounded-md text-center border border-black h-full dark:border-white ">
        <div className="space-y-3 m-3">
          <h1 className="text-2xl text-center font-semibold uppercase">
            Career with Most Entries
          </h1>
          <p className="text-2xl text-center uppercase">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Panels;
