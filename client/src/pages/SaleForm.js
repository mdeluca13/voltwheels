import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import ImageUpload from '../components/Image';

function SaleForm() {
  const [formState, setFormState] = useState({ make: '', model: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="text-light bg-dark p-5">
      {/* <SaleForm> */}
      <h1>Add A Car For Sale</h1>
      <label>Add A Photo Of Your Vehicle</label>
      <div>
        <ImageUpload />
      </div>
      <form>
        <label>
          Make:
          <input type="text" name="make" />{" "}
        </label>
        <label>
          Model:
          <input type="text" name="model" />{" "}
        </label>
        <label>
          Year:
          <input type="text" name="year" />{" "}
        </label>
        <label>
          Color:
          <input type="text" name="color" />{" "}
        </label>
        <label>
          Range:
          <input type="text" name="range" />{" "}
        </label>
        <label>
          Features:
          <input type="text" name="features" />{" "}
        </label>
        <label>
          Class:
          <input type="text" name="class" />{" "}
        </label>
        <label>
          Price:
          <input type="text" name="price" />{" "}
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

// const handlePageChange = (page) => setCurrentPage(page);

export default SaleForm;
