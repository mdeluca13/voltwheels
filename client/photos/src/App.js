import React, { useState } from 'react';

const App = () => {
  const [imageURL, setImageURL] = useState('');
  const [formImageURL, setFormImageURL] = useState('');

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
        const uploadedURL = data.secure_url;
        setImageURL(uploadedURL);
        setFormImageURL(uploadedURL);
        console.log('Upload success:', uploadedURL);
      })
      .catch((error) => {
        console.log('Upload error:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   //WOOHOOOO IMAGE URL BABYYYYY
    console.log('Form submitted with image URL:', formImageURL);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default function MyApp() {
  return <App />;
}
