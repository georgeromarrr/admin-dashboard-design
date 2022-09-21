import React, { useState, useEffect } from "react";

const Panels = () => {
  const [jsonData, setJsonData] = useState([]);
  const recipientArray = [];
  const countryArray = [];
  const careerArray = [];
  const recipientCount = {};
  const countryCount = {};
  const careerCount = {};
  let recipientMaxCount;
  let countryMaxCount;
  let careerMaxCount;
  let recipientMaxIndex;
  let countryMaxIndex;
  let careerMaxIndex;
  let topCelebrity;
  let topCountry;
  let topCareer;

  useEffect(() => {
    if (localStorage.getItem("csv2JsonFileData")) {
      setJsonData(JSON.parse(localStorage.getItem("csv2JsonFileData")).data);
    }
  }, []);

  const getData = () => {
    for (let key in jsonData) {
      recipientArray.push(jsonData[key].Recipient);
      countryArray.push(jsonData[key].Country);
      careerArray.push(jsonData[key].Career);
    }
  };

  const handleData = () => {
    recipientArray.forEach(function (i) {
      recipientCount[i] = (recipientCount[i] || 0) + 1;
    });

    countryArray.forEach(function (i) {
      countryCount[i] = (countryCount[i] || 0) + 1;
    });

    careerArray.forEach(function (i) {
      careerCount[i] = (careerCount[i] || 0) + 1;
    });
  };

  const handleMaxData = () => {
    let recipientObjValue = Object.values(recipientCount);
    recipientMaxCount = Math.max(...recipientObjValue);
    recipientMaxIndex =
      Object.values(recipientCount).indexOf(recipientMaxCount);
    topCelebrity = recipientArray[recipientMaxIndex];

    let countryObjValue = Object.values(countryCount);
    countryMaxCount = Math.max(...countryObjValue);
    countryMaxIndex = Object.values(countryCount).indexOf(countryMaxCount);
    topCountry = countryArray[countryMaxIndex];

    let careerObjValue = Object.values(careerCount);
    careerMaxCount = Math.max(...careerObjValue);
    careerMaxIndex = Object.values(careerCount).indexOf(careerMaxCount);
    topCareer = careerArray[careerMaxIndex];
  };

  getData();
  handleData();
  handleMaxData();

  return (
    <div className="grid grid-cols-3 gap-12 dark:text-white mx-3">
      <div className="p-3 bg-inherit rounded-md text-center border border-black h-full dark:border-white ">
        <div className="m-3">
          <h1 className="text-2xl text-center font-semibold uppercase">
            Celebrity with Most Entries
          </h1>
          <p className="text-xs text-center font-medium uppercase italic">
            with {recipientMaxCount} entries
          </p>
          <p className="text-2xl text-center uppercase my-2">{topCelebrity}</p>
        </div>
      </div>
      <div className="p-3 bg-inherit rounded-md text-center border border-black h-full dark:border-white ">
        <div className="m-3">
          <h1 className="text-2xl text-center font-semibold uppercase">
            Country with Most Entries
          </h1>
          <p className="text-xs text-center font-medium uppercase italic">
            with {countryMaxCount} entries
          </p>
          <p className="text-2xl text-center uppercase my-2">{topCountry}</p>
        </div>
      </div>
      <div className="p-3 bg-inherit rounded-md text-center border border-black h-full dark:border-white ">
        <div className="m-3">
          <h1 className="text-2xl text-center font-semibold uppercase">
            Career with Most Entries
          </h1>
          <p className="text-xs text-center font-medium uppercase italic">
            with {careerMaxCount} entries
          </p>
          <p className="text-2xl text-center uppercase my-2">{topCareer}</p>
        </div>
      </div>
    </div>
  );
};

export default Panels;
