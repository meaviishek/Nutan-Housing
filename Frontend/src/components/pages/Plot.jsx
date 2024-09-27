import React from 'react';
import {Pdfviewer} from '../index';
import { Lpdf } from '../indeximages';


function Plot() {
  const pdfUrl = Lpdf; // Use the correct path

  return (
    <div className="App">
      <Pdfviewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default Plot;
