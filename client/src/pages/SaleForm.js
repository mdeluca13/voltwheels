import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CAR } from '../utils/mutations';
import ImageUpload from '../components/Image';

function SaleForm() {
  
  const [formState, setFormState] = useState({ make: '', model: '', year: '', color: '', range: '', trim: '', extra: '', class: '', image: '', price: '', quantity: '' });
  const [addCar] = useMutation(ADD_CAR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try { 
      const { mutationResponse } = await addCar({
      variables: {
        make: formState.make,
        model: formState.model,
        year: formState.year,
        color: formState.color,
        range: formState.range,
        trim: formState.trim,
        quantity: formState.quantity,
        extra: formState.extra,
        class: formState.class,
        image: formState.image,
        price: formState.price
      },
    });
  }
  catch (err){
    console.log(err)
  }
    // console.log(formState.price)
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
          <input type="text" name="make" onChange={handleChange}/>{" "}
        </label>
        <label>
          Model:
          <input type="text" name="model" onChange={handleChange}/>{" "}
        </label>
        <label>
          Year:
          <input type="text" name="year" onChange={handleChange}/>{" "}
        </label>
        <label>
          Color:
          <input type="text" name="color" onChange={handleChange}/>{" "}
        </label>
        <label>
          Range:
          <input type="text" name="range" onChange={handleChange}/>{" "}
        </label>
        <label>
          Trim:
          <input type="text" name="trim" onChange={handleChange}/>{" "}
        </label>
        <label>
          Extra:
          <input type="text" name="extra" onChange={handleChange}/>{" "}
        </label>
        <label>
          Class:
          <input type="text" name="class" onChange={handleChange}/>{" "}
        </label>
        <label>
          Quantity:
          <input type="text" name="quantity" onChange={handleChange}/>{" "}
        </label>
        <label>
          Price:
          <input type="text" name="price" onChange={handleChange}/>{" "}
        </label>
        <input type="submit" value="submit" onClick={handleFormSubmit}/>
      </form>
    </div>
  );
}

// const handlePageChange = (page) => setCurrentPage(page);

export default SaleForm;
