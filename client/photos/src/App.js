import React, { useState } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

const App = () => {
  const [imageURL, setImageURL] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const cloudName = 'dewcgeq3o';
    const unsignedUploadPreset = 'nd7skeft';

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', unsignedUploadPreset);

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        setImageURL(data.secure_url);
        console.log('Upload success:', data.secure_url);
      })
      .catch((error) => {
        console.log('Upload error:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />

      {imageURL && (
        <CloudinaryContext cloudName="dewcgeq3o">
          <Image publicId={imageURL} />
        </CloudinaryContext>
      )}
    </div>
  );
};



export default function MyApp() {
  return <App />;
}