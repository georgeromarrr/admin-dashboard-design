import React from "react";

const Chart = () => {
  return (
    <div className="mx-4 grid grid-cols-2 gap-12 border border-black">
      <div className="p-4 bg-inherit flex rounded-md border border-black h-full dark:border-white">
        <div className="border border-black self-center w-full h-full p-2">
          <div className="border border-black">
            <h1 className="font-semibold uppercase">A</h1>
            <h1 className="font-semibold uppercase">A</h1>
            <h1 className="font-semibold uppercase">A</h1>
            <h1 className="font-semibold uppercase">A</h1>
          </div>
          <div className="border border-black ">
            <h1 className="font-semibold uppercase">1</h1>
            <h1 className="font-semibold uppercase">2</h1>
            <h1 className="font-semibold uppercase">3</h1>
            <h1 className="font-semibold uppercase">4</h1>
          </div>
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
    </div>
  );
};

export default Chart;
