import React from "react";
import { Lodhipur} from "../indeximages";

const Plot = () => {
  return (
   <div className="container mx-auto max-w-6xl">
     <div className="h-auto w-auto">
      <img
        src={Lodhipur}
        title="DWG Viewer"
        className="w-full h-full"
      />
    </div>
   </div>
  );
};

export default Plot;
