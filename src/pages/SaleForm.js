import React from "react";
import axios from "axios";
state = {
 
  // Initially, no file is selected
  selectedFile: null
};

// On file select (from the pop up)
onFileChange = event => {

  // Update the state
  this.setState({ selectedFile: event.target.files[0] });

};

// On file upload (click the upload button)
onFileUpload = () => {

  // Create an object of formData
  const formData = new FormData();

  // Update the formData object
  formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
  );

  // Details of the uploaded file
  console.log(this.state.selectedFile);

  // Request made to the backend api
  // Send formData object
  axios.post("api/uploadfile", formData);
};

const SaleForm = () => {
  return (
    <div className="text-light bg-dark p-5">
      <SaleForm>
        <h1>Add A Car For Sale</h1>
        <label>Add A Photo Of Your Vehicle</label>
<div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
 
                    <p>File Type: {this.state.selectedFile.type}</p>
 
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
 
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };
 
    render() {
 
        return (
            <div>
                <h1>
                    GeeksforGeeks
                </h1>
                <h3>
                    File Upload using React!
                </h3>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
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
      </SaleForm>
    </div>
  );
};
// const handlePageChange = (page) => setCurrentPage(page);

export default SaleForm;
