import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import Chart from "../components/Chart/Chart";
import Table from "../components/Table/Table";

const Home = () => {
  return (
    <>
      <PageTemplate>
        <div className="border border-black rounded-md m-1 my-14 relative inset-0 overflow-y-hidden h-full">
          <Table />
        </div>
      </PageTemplate>
    </>
  );
};

export default Home;
