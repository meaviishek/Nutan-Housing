

const Pdfviewer = ({ pdfUrl }) => {
 
  return (
    <div className="h-screen w-full">
    <iframe
      src={pdfUrl}
      className="w-full h-full"
      title="PDF Viewer"
      frameBorder="0"
    ></iframe>
  </div>
  );
};

export default Pdfviewer;
