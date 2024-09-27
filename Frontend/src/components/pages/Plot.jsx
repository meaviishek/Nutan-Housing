import React from 'react';
import {Pdfviewer} from '../index';
import { Lpdf,Lodhipur } from '../indeximages';


function Plot() {
  const pdfUrl = Lpdf; // Use the correct path

  return (
    <div className="App mt-16">
      {/* <Pdfviewer pdfUrl={pdfUrl} /> */}
      <img src={Lodhipur}/>
    </div>
  );
}

export default Plot;
