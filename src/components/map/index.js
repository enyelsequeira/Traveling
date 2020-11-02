import React, { useState } from "react";
import ReactTooltip from "react-tooltip";


import MapChart from "./MapChart";

const Map = () =>  {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default  Map