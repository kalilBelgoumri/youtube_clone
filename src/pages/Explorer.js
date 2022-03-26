import React, { useState, useEffect } from "react";
import CardMediaYoutube from "../components/CardMedia";
import DataExplorer from "../data/dataExplorer";

function Explorer() {
  console.log(DataExplorer);

  return (
    <div className="px-10 gap-x-1 gap-y-2 pt-5 grid grid-cols-2 xl:grid-cols-6">
      {DataExplorer.map((data) => (
        <>
          <CardMediaYoutube typo={data.name} src={data.icon} />
        </>
      ))}
    </div>
  );
}

export default Explorer;
