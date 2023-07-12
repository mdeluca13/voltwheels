import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
import ImageUploading from "react-images-uploading";
import "../components/SaleForm/SaleForm.css";

function SaleForm() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  // const onChange = (imageList, addUpdateIndex) => {
  //   // data for submit
  //   console.log(imageList, addUpdateIndex);
  //   setImages(imageList);
  return (
    <div className="text-light bg-dark p-5">
      {/* <SaleForm> */}
      <h1>Add A Car For Sale</h1>
      <label>Add A Photo Of Your Vehicle</label>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          // onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg"]}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
      <form>
        <label>
          Make:
          <input type="text" name="name" />{" "}
        </label>
        <label>
          Model:
          <input type="text" name="name" />{" "}
        </label>
        <label>
          Year:
          <input type="text" name="name" />{" "}
        </label>
        <label>
          Color:
          <input type="text" name="name" />{" "}
        </label>
        <label>
          Range:
          <input type="text" name="name" />{" "}
        </label>
        <label>
          Features:
          <input type="text" name="name" />{" "}
        </label>
        <label>
          Class:
          <input type="text" name="name" />{" "}
        </label>
        <label>
          Price:
          <input type="text" name="name" />{" "}
        </label>
        <input type="submit" value="submit" />
      </form>
      {/* </SaleForm> */}
    </div>
  );
}

// const handlePageChange = (page) => setCurrentPage(page);

export default SaleForm;
