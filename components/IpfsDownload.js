import React  from 'react';
import useIPFS from '../hooks/useIPFS';

const IPFSDownload = ({ hash, filename }) => {

  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div className="download-component">
          <a href={file} download={filename}>
            <button className="buy-button">
              You got it, now enjoy!
            </button>
          </a>
        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;