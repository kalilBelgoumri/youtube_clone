import React, { useState, useEffect } from "react";
import CardMediaYoutube from "../components/CardMedia";
import DataExplorer from "../data/dataExplorer";

function Explorer() {
  const uniqid = require("uniqid");
  console.log(uniqid());

  return (
    <>
      <div className="pl-[10vw] flex justify-center bg-[#f9f9f9]">
        <div className="w-[60vw] px-5 gap-x-1 gap-y-1 pt-5 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {DataExplorer.map((data) => (
            <div key={uniqid()}>
              <CardMediaYoutube typo={data.name} src={data.icon} />
            </div>
          ))}
        </div>
      </div>
      <div className="video text-center">
        <h1 className="ml-6 mt-10 font-bold"> Vidéos tendance</h1>
      </div>
    </>
  );
}

export default Explorer;
