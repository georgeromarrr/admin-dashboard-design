import React, { useRef, useState } from "react";
import { FileIcon, FileIcon2 } from "../../assets/Icons/Icons";
import { parse } from "papaparse";
import Table from "../Table/Table";
import { useNavigate } from "react-router-dom";

const ConvertCSV = () => {
  const buttonRef = useRef(null);
  const redirectTo = useNavigate();
  const [fileName, setFileName] = useState("");
  const [uploadOpen, setUploadOpen] = useState(false);
  const [isDone, setDone] = useState(false);
  const [fileData, setFileData] = useState();
  const [rawFile, setRawFile] = useState();

  const handleUploadMenu = () => {
    setUploadOpen(!uploadOpen);
  };

  const handleClose = () => {
    setUploadOpen(!uploadOpen);
    redirectTo(0);
  };

  const handleCSVFile = (e) => {
    e.preventDefault();
    Array.from(e.target.files)
      .filter((file) => file.type === "text/csv")
      .forEach(async (file) => {
        const text = await file.text();
        const result = parse(text, { header: true });
        const headerResult = parse(text);
        setFileData(result);
        setRawFile(headerResult);
      });
    setFileName(e.target.files[0].name);
  };

  const selectCSVFile = (e) => {
    buttonRef.current.click(e);
  };

  const saveJSONFile = () => {
    localStorage.setItem("csv2JsonFileData", JSON.stringify(fileData));
    localStorage.setItem(
      "csv2JsonFileDataRawHeaders",
      JSON.stringify(rawFile.data[0])
    );
    setDone(!isDone);
  };

  return (
    <>
      <div className="mx-2 overflow-clip">
        <div className="p-3">
          <div className="p-1">
            <h1 className="text-2xl text-start font-semibold uppercase">
              Upload CSV File
            </h1>

            <div className="flex justify-end my-4 space-x-4">
              <button
                type="button"
                onClick={handleUploadMenu}
                className="border border-black px-20 py-2 rounded-md uppercase dark:border-white"
              >
                Upload
              </button>
            </div>
          </div>
          <div className="border border-black rounded-md m-1 my-14 relative inset-0 overflow-y-hidden h-full">
            <Table />
          </div>
        </div>
      </div>
      {uploadOpen && (
        <div className="fixed flex justify-center inset-0 z-20 bg-black/60 backdrop-blur-1xl">
          <div className="m-12 self-center relative">
            <div className="m-2 h-full">
              <div className="border border-black p-8 rounded-md bg-white dark:bg-neutral-700">
                <h1 className="text-2xl text-start font-semibold uppercase mx-2">
                  Upload CSV File
                </h1>
                <div className="mx-2 text-sm text-gray-500 dark:text-gray-300">
                  The CSV file will be converted to web data and use it as the
                  dashboard data
                </div>
                <div className="pt-12">
                  <div className="w-1/2 p-4 mx-auto hidden">
                    <input
                      className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-inherit dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      type="file"
                      accept=".csv"
                      onChange={handleCSVFile}
                      ref={buttonRef}
                    />
                  </div>
                  {isDone ? (
                    <div className="p-8 flex justify-center items-center text-green-600 text-lg">
                      <p>Success CSV is now already uploaded!</p>
                    </div>
                  ) : (
                    <>
                      {!fileName && (
                        <div className="flex justify-center">
                          <FileIcon2 className="h-28 w-28 fill-black/20 " />
                        </div>
                      )}
                      {fileName && (
                        <div className="p-8 flex justify-center items-center">
                          <div className="flex space-x-2">
                            <FileIcon />
                            <p>{fileName}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <div className="flex justify-end pt-14 space-x-4">
                    {isDone ? (
                      <button
                        type="button"
                        onClick={handleClose}
                        className="border border-black px-12 py-2 rounded-md uppercase dark:border-white hover:text-white hover:border-green-700 hover:bg-green-700 dark:hover:border-green-700"
                      >
                        Done
                      </button>
                    ) : (
                      <>
                        {!fileName && (
                          <button
                            type="button"
                            onClick={handleUploadMenu}
                            className="border border-gray-400 text-gray-400 px-12 py-2 rounded-md uppercase hover:bg-gray-400 hover:text-white"
                          >
                            Cancel
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={selectCSVFile}
                          className="border border-black px-12 py-2 rounded-md uppercase dark:border-white hover:text-white hover:border-green-700 hover:bg-green-700 dark:hover:border-green-700"
                        >
                          Upload CSV
                        </button>

                        {fileName && (
                          <button
                            type="button"
                            onClick={saveJSONFile}
                            className="border border-green-600 text-green-600 px-12 py-2 rounded-md uppercase hover:border-green-700 hover:bg-green-700 hover:text-white"
                          >
                            Save
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConvertCSV;
