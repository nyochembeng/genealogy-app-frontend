// link to backend

import React, { useState } from 'react';
import axios from 'axios';
import { Button, IconButton } from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons';
import Dropzone from 'react-dropzone'; // Third-party library for file upload
import config from '../config.json'

const PhotoUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]); // Assuming single file upload
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('photo', file);

    try {
      const response = await axios.post(`${config.apiUrl}/families/upload-photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onUploadSuccess(response.data); // Call parent function with uploaded photo data
    } catch (error) {
      console.error(error); // Handle errors appropriately
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <IconButton component="button" aria-label="upload photo">
              <AddAPhoto />
            </IconButton>
            {file && <p>Selected file: {file.name}</p>}
          </div>
        )}
      </Dropzone>
      <Button variant="contained" color="primary" disabled={!file} onClick={handleSubmit}>
        Upload Photo
      </Button>
    </div>
  );
};

export default PhotoUpload;
