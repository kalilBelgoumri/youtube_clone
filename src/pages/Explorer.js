import React, { useState, useEffect } from "react";
import CardMediaYoutube from "../components/CardMedia";
import DataExplorer from "../data/dataExplorer";

function Explorer() {
  console.log(DataExplorer);

  return (
    <div className="w-[60vw] px-5 gap-x-1 gap-y-1 pt-5 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {DataExplorer.map((data) => (
        <>
          <CardMediaYoutube typo={data.name} src={data.icon} />
        </>
      ))}
    </div>
  );
}

export default Explorer;
