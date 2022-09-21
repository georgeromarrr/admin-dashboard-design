import React from "react";
import FilePageTemplate from "../components/PageTemplate/FilePageTemplate";
import ConvertCSV from "../components/ConvertCSV/ConvertCSV";

const File = () => {
  return (
    <FilePageTemplate>
      <ConvertCSV />
    </FilePageTemplate>
  );
};

export default File;
