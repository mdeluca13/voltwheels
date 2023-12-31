import React, { useState } from 'react';

//const [tempURL, setTempURL] = useState('');
let tempURL='';

// image upload function rendering the coudinary push and fetch for image upload and download for display
const ImageUpload = ({setImageURL}) => {

   // const imageLink = props.imageLink;
   // const setImageLink = props.setImageLink();
    
  //const [imageURL, setImageURL] = useState('');
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
        //setFormImageURL(uploadedURL);
        console.log('Upload success:', uploadedURL);
        return uploadedURL;

      })
      .catch((error) => {
        console.log('Upload error:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   //THIS IS WHERE THE IMAGE GETS SUBMITTED
    console.log('Form submitted with image URL:', formImageURL);
  };

  return (
    <div>
        <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default ImageUpload;
export const IMAGE_URL=tempURL;

// import React, { useState } from 'react';

// const ImageUpload = () => {
//   const [imageURL, setImageURL] = useState('');
//   const [formImageURL, setFormImageURL] = useState('');

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     const cloudName = 'dewcgeq3o';
//     const unsignedUploadPreset = 'nd7skeft';

//     const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', unsignedUploadPreset);

//     fetch(url, {
//       method: 'POST',
//       body: formData
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const uploadedURL = data.secure_url;
//         setImageURL(uploadedURL);
//         setFormImageURL(uploadedURL);
//         console.log('Upload success:', uploadedURL);
//       })
//       .catch((error) => {
//         console.log('Upload error:', error);
//       });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//    //THIS IS WHERE THE IMAGE GETS SUBMITTED
//     console.log('Form submitted with image URL:', formImageURL);
//   };

//   return (
//     <div>
//         <input type="file" onChange={handleFileUpload} />
//     </div>
//   );
// };

// export default ImageUpload;

// import React, { useState } from 'react';

// const ImageUpload = () => {
//   const [imageURL, setImageURL] = useState('');
//   const [formImageURL, setFormImageURL] = useState('');

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     const cloudName = 'dewcgeq3o';
//     const unsignedUploadPreset = 'nd7skeft';

//     const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', unsignedUploadPreset);

//     fetch(url, {
//       method: 'POST',
//       body: formData
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const uploadedURL = data.secure_url;
//         setImageURL(uploadedURL);
//         setFormImageURL(uploadedURL);
//         console.log('Upload success:', uploadedURL);
//       })
//       .catch((error) => {
//         console.log('Upload error:', error);
//       });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//    //THIS IS WHERE THE IMAGE GETS SUBMITTED
//     console.log('Form submitted with image URL:', formImageURL);
//   };

//   return (
//     <div>
//       {/* <form onSubmit={handleSubmit}> */}
//         <input type="file" onChange={handleFileUpload} />
//       {/* </form> */}
//     </div>
//   );
// };

// export default ImageUpload;


// import ReactAvatarEditor from "react-avatar-editor";
// import React, { useState } from 'react';
// import { CloudinaryContext, Image } from 'cloudinary-react';
// import cloudinary from 'cloudinary-core';

// const ImageUpload = () => {
//   const [imageURL, setImageURL] = useState('');

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     const cloudName = 'dewcgeq3o';
//     const unsignedUploadPreset = 'nd7skeft';

//     const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', unsignedUploadPreset);

//     fetch(url, {
//       method: 'POST',
//       body: formData
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setImageURL(data.secure_url);
//         console.log('Upload success:', data.secure_url);
//       })
//       .catch((error) => {
//         console.log('Upload error:', error);
//       });
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} />

//       {imageURL && (
//         <CloudinaryContext cloudName="dewcgeq3o">
//           <Image publicId={imageURL} />
//         </CloudinaryContext>
//       )}
//     </div>
//   );
// };


// class UploadImage extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//         image: "",
//         allowZoomOut: false,
//         position: { x: 0.5, y: 0.5 },
//         scale: 1,
//         rotate: 0,
//         borderRadius: 50,
//         preview: null,
//         width: 330,
//         height: 330,
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
// }
// handleNewImage = (e) => {
//     this.setState({ image: e.target.files[0] });
// };
// handleScale = (e) => {
//     const scale = parseFloat(e.target.value);
//     this.setState({ scale });
// };
// handlePositionChange = (position) => {
//     this.setState({ position });
// };
// setEditorRef = (editor) => (this.editor = editor);

// async handleSubmit(e) {
//   if (this.editor) {
//     const img = this.editor.getImageScaledToCanvas().toDataURL();
//     console.log(img);

//     cloudinary.upload(img, { folder: 'my-folder' })
//     .then((result) => {
//       console.log('Upload success:', result);

//     })
//       .catch((error) => {
//         console.log('Upload error:', error);
//       });
//   }
// }

// render() {
//     return (
//     <div>
//         <div>
//             <ReactAvatarEditor
//                 ref={this.setEditorRef}
//                 scale={parseFloat(this.state.scale)}
//                 width={this.state.width}
//                 height={this.state.height}
//                 position={this.state.position}
//                 onPositionChange={this.handlePositionChange}
//                 rotate={parseFloat(this.state.rotate)}
//                 borderRadius={this.state.width / (100 / this.state.borderRadius)}
//                 image={this.state.image}
//                 color={[255, 255, 255, 0.6]}
//                 className="editor-canvas"
//             />
//         </div>
//         <br />
//         <label>
//             <input
//                 name="upload-img-input"
//                 type="file"
//                 onChange={this.handleNewImage}
//                 />
//                 <h3>Upload Photo</h3>
//                 </label>
//                 <br />
//                 <h3>Zoom</h3>
//                 <input
//                     name="scale"
//                     type="range"
//                     onChange={this.handleScale}
//                     min={this.state.allowZoomOut ? "0.1" : "1"}
//                     max="2"
//                     step="0.01"
//                     defaultValue="1"
//                 />
//         <div>
//             <button onClick={this.handleSubmit}>SUBMIT</button>
//         </div>
//     </div>
// )}}

// export default ImageUpload;