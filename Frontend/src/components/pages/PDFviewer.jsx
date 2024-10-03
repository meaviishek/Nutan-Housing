import React, { useState, useRef, useEffect } from 'react';
import { Lsvg } from '../indeximages'; // Your CAD image

const PDFviewer = () => {
    const [hoveredPlot, setHoveredPlot] = useState(null);
    const [imageSize, setImageSize] = useState({ width: 1000, height: 1200 });
    const imageRef = useRef(null);

    const plots = [
        { id: 1, x: 120, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 140, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 120, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 140, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 120, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 140, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 120, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 140, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 120, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 140, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 120, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 140, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 120, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 140, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 120, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 140, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 120, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 140, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 120, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 140, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 120, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 140, y: 462, width: 20, height: 17, customer: "Jane Smith" },

        { id: 21, x: 120, y: 488, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 140, y: 488, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 120, y: 506, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 140, y: 506, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 120, y: 519, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 140, y: 519, width: 20, height: 17, customer: "Jane Smith" },









        { id: 1, x: 171, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 191, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 171, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 191, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 171, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 191, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 171, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 191, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 171, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 191, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 171, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 191, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 171, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 191, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 171, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 191, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 171, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 191, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 171, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 191, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 171, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:191, y: 462, width: 20, height: 17, customer: "Jane Smith" },

        { id: 21, x: 171, y: 488, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 191, y: 488, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 171, y: 506, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 191, y: 506, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 171, y: 519, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 191, y: 519, width: 20, height: 17, customer: "Jane Smith" },










        { id: 1, x: 222, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x:  242, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 222, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x:  242, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 222, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 242, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 222, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x:  242, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 222, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x:  242, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 222, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x:  242, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 222, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x:  242, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 222, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x:  242, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 222, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x:  242, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 222, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x:  242, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 222, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 242, y: 462, width: 20, height: 17, customer: "Jane Smith" },

        { id: 21, x: 222, y: 488, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 242, y: 488, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 222, y: 506, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 242, y: 506, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 222, y: 519, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 242, y: 519, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 222, y: 532, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 242, y: 532, width: 20, height: 13, customer: "Jane Smith" },
       
        { id: 22, x: 242, y: 545, width: 20, height: 13, customer: "Jane Smith" },
    
        { id: 22, x: 242, y: 558, width: 20, height: 13, customer: "Jane Smith" },
       
        { id: 22, x: 242, y: 571, width: 20, height: 13, customer: "Jane Smith" },

        { id: 22, x: 242, y: 584, width: 20, height: 13, customer: "Jane Smith" },
     
        { id: 22, x: 242, y: 597, width: 20, height: 13, customer: "Jane Smith" },
  
        { id: 22, x: 242, y: 610, width: 20, height: 17, customer: "Jane Smith" },
   
        { id: 22, x: 242, y: 628, width: 20, height: 17, customer: "Jane Smith" },








        { id: 1, x: 274, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 294, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 274, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 294, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 274, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 294, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 274, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 294, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 274, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 294, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 274, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 294, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 274, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 294, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 274, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 294, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 274, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 294, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 274, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 294, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:294, y: 462, width: 20, height: 17, customer: "Jane Smith" },

        { id: 21, x: 274, y: 488, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 294, y: 488, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 274, y: 506, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 294, y: 506, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 519, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 294, y: 519, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 532, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 294, y: 532, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 545, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 294, y: 545, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 558, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 294, y: 558, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 571, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 294, y: 571, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 584, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 294, y: 584, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 597, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 294, y: 597, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 274, y: 610, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 294, y: 610, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 274, y: 628, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 294, y: 628, width: 20, height: 17, customer: "Jane Smith" },







        { id: 1, x: 325, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 346, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 325, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 346, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 325, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 346, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 325, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 346, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 325, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 346, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 325, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 346, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 325, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 346, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 325, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 346, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 325, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 346, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 325, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 346, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:346, y: 462, width: 20, height: 17, customer: "Jane Smith" },

        { id: 21, x: 325, y: 488, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 346, y: 488, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 325, y: 506, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 346, y: 506, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 519, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 346, y: 519, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 532, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 346, y: 532, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 545, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 346, y: 545, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 558, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 346, y: 558, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 571, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 346, y: 571, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 584, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 346, y: 584, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 597, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 346, y: 597, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 325, y: 610, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 346, y: 610, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 325, y: 628, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 346, y: 628, width: 20, height: 17, customer: "Jane Smith" },




        { id: 1, x: 377, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 397, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 377, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 397, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 377, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 397, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 377, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 397, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 377, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 397, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 377, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 397, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 377, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 397, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 377, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 397, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 377, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 397, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 377, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 397, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 377, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:397, y: 462, width: 20, height: 17, customer: "Jane Smith" },


        { id: 21, x: 376, y: 488, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 397, y: 488, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 376, y: 506, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 397, y: 506, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 376, y: 519, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 397, y: 519, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 376, y: 532, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 397, y: 532, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 376, y: 545, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 397, y: 545, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 376, y: 558, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 397, y: 558, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 376, y: 571, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 397, y: 571, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 376, y: 584, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 397, y: 584, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 376, y: 597, width: 20, height: 13, customer: "John Doe" },
        { id: 22, x: 397, y: 597, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 376, y: 610, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 397, y: 610, width: 20, height: 17, customer: "Jane Smith" },
        { id: 21, x: 376, y: 628, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 397, y: 628, width: 20, height: 17, customer: "Jane Smith" },





        { id: 1, x: 428, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 449, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 428, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 449, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 428, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 449, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 428, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 449, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 428, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 449, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 428, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 449, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 428, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 449, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 428, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 449, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 428, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 449, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 428, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x:449, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 428, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:449, y: 462, width: 20, height: 17, customer: "Jane Smith" },






        { id: 1, x: 479, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 500, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 479, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 500, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 479, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 500, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 479, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 500, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 479, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 500, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 479, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 500, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 479, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 500, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 479, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 500, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 479, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 500, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 479, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 500, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 479, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:500, y: 462, width: 20, height: 17, customer: "Jane Smith" },



     
        { id: 3, x: 530, y: 341, width: 20, height: 17, customer: "John Doe" },
        { id: 4, x: 550, y: 341, width: 20, height: 17, customer: "Jane Smith" },
        { id: 5, x: 530, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 550, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 530, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 550, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 550, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 530, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 550, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 530, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 550, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 530, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 550, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 530, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 550, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 530, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 550, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 530, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 550, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:530, y: 462, width: 20, height: 17, customer: "Jane Smith" },
        


        { id: 3, x: 581, y: 341, width: 20, height: 17, customer: "John Doe" },
        { id: 4, x: 602, y: 341, width: 20, height: 17, customer: "Jane Smith" },
        { id: 5, x: 581, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 602, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 581, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 602, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 581, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 602, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 581, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 602, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 581, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 602, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 581, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 602, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 581, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 602, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 581, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 602, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 581, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:602, y: 462, width: 20, height: 17, customer: "Jane Smith" },


   
        { id: 5, x: 632, y: 354, width: 20, height: 17, customer: "John Doe" },
        { id: 6, x: 653, y: 354, width: 20, height: 17, customer: "Jane Smith" },
        { id: 7, x: 632, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 653, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 632, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 653, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 632, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 653, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 632, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 653, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 632, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 653, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 632, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 653, y: 436, width: 20, height: 13, customer: "Jane Smith" },
   





   
        // Add more plot data here
    ];

    const handleImageLoad = () => {
        if (imageRef.current) {
            const { width, height } = imageRef.current.getBoundingClientRect();
            setImageSize({ width, height });
        }
    };

    // Update image size on window resize
    useEffect(() => {
        const handleResize = () => {
            if (imageRef.current) {
                const { width, height } = imageRef.current.getBoundingClientRect();
                setImageSize({ width, height });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleHover = (plot) => {
        setHoveredPlot(plot);
    };

    const handleMouseLeave = () => {
        setHoveredPlot(null);
    };

    // Function to calculate responsive positioning
    const calculatePosition = (plot) => {
        const originalImageWidth = 1000; // Set to your original image's width
        const originalImageHeight = 1200; // Set to your original image's height

        // Calculate relative positions based on current image size
        const xRatio = imageSize.width / originalImageWidth;
        const yRatio = imageSize.height / originalImageHeight;

        return {
            top: `${plot.y * yRatio}px`,
            left: `${plot.x * xRatio}px`,
            width: `${plot.width * xRatio}px`,
            height: `${plot.height * yRatio}px`
        };
    };

    return (
        <div className="relative">
            <img
                src={Lsvg}
                alt="CAD Plot"
                ref={imageRef}
                onLoad={handleImageLoad}
                className="w-full h-auto"
            />

            {/* Overlay Buttons for Plots */}
            {imageSize.width && plots.map(plot => (
                <div
                    key={plot.id}
                    className="absolute bg-primary border-[1px] bg-opacity-10 hover:bg-opacity-75 transition-all"
                    style={calculatePosition(plot)}
                    onMouseEnter={() => handleHover(plot)}
                    onMouseLeave={handleMouseLeave}
                ></div>
            ))}

            {/* Tooltip to show customer details on hover */}
            {hoveredPlot && (
                <div
                    className="absolute bg-white border-[0.5 px] p-2 rounded shadow-lg"
                    style={{
                        top: `${hoveredPlot.y * (imageSize.height / 1200) + hoveredPlot.height * (imageSize.height / 1200) + 10}px`,
                        left: `${hoveredPlot.x * (imageSize.width / 1000)}px`,
                    }}
                >
                    <p className="text-sm font-medium">Customer: {hoveredPlot.customer}</p>
                </div>
            )}
        </div>
    );
};

export default PDFviewer;