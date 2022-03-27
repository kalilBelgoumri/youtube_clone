import React, { useState, useEffect } from "react";
import CardMediaYoutube from "../components/CardMedia";
import DataExplorer from "../data/dataExplorer";

function Explorer() {
  return (
    <>
      <div className="w-[60vw] px-5 gap-x-1 gap-y-1 pt-5 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {DataExplorer.map((data, index) => (
          <div key={index}>
            <CardMediaYoutube typo={data.name} src={data.icon} />
          </div>
        ))}
      </div>
      <h1 className="ml-6 mt-10 font-bold"> Vidéos tendance</h1>
    </>
  );
}

export default Explorer;
