import React, { useState, useEffect } from "react";

const Table = () => {
  const [jsonData, setJsonData] = useState([]);
  const [jsonDataHeaders, setJsonDataHeaders] = useState([]);
  const yearArray = [];
  const sortYearArray = [];

  useEffect(() => {
    if (localStorage.getItem("csv2JsonFileData")) {
      setJsonData(JSON.parse(localStorage.getItem("csv2JsonFileData")).data);
      setJsonDataHeaders(
        JSON.parse(localStorage.getItem("csv2JsonFileDataRawHeaders"))
      );
    }
  }, []);

  const getDataYear = () => {
    for (let key in jsonData) {
      yearArray.push(jsonData[key].Year);
    }
  };

  const handleDataYear = () => {
    yearArray.forEach((index) => {
      if (!sortYearArray.includes(index)) {
        sortYearArray.push(index);
      }
    });
  };

  getDataYear();
  handleDataYear();

  console.log(jsonData);

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg rounded-md w-full h-[30rem] outline outline-1 relative">
      {localStorage.getItem("csv2JsonFileData") === null ? (
        <div className="m-12 relative flex justify-center my-40 p-12 items-center italic text-2xl">
          Please upload a CSV File...
        </div>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
          <thead className="text-xs text-white uppercase bg-neutral-700 dark:bg-neutral-900 dark:text-gray-200 sticky top-0 z-20">
            <tr>
              {jsonDataHeaders.map((item) => (
                <th scope="col" className="py-3 px-6 text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jsonData.map((item) => (
              <tr className="bg-white border-b text-center border-gray-300 dark:bg-neutral-700 dark:border-gray-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="py-4 px-6 text-center w-28">{item.Year}</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-ellipsis overflow-hidden"
                >
                  {item.Rank}
                </th>
                <td
                  scope="row"
                  className="py-4 px-6 text-center text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden dark:text-white"
                >
                  {item.Recipient}
                </td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-ellipsis overflow-hidden "
                >
                  {item.Country}
                </th>
                <td className="py-4 px-6 text-center dark:text-white">
                  {item.Career}
                </td>
                <td className="py-4 px-6 text-center font-medium uppercase text-green-600">
                  {item.Tied}
                </td>
                <td className="py-4 px-6 text-center font-medium uppercase text-green-600">
                  {item.Title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
