import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CAR } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CarForm = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2000);
  const [color, setColor] = useState('');
  const [range, setRange] = useState(300);
  const [trim, setTrim] = useState('');
  const [extra, setExtra] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(30000);
  const [quantity, setQuantity] = useState(1);

  const [addCar, { error }] = useMutation(ADD_CAR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addCar({
        variables: {
          make,
          model,
          year,
          color,
          range,
          trim,
          extra,
          image,
          price,
          quantity,
          seller: Auth.getProfile().data.username,
        },
      });

      // setMake('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'make') {
      setMake(value);
    }
    if (name === 'model') {
      setModel(value);
    }
    if (name === 'year') {
      setYear(value);
    }
    if (name === 'color') {
      setColor(value);
    }
    if (name === 'range') {
      setRange(value);
    }
    if (name === 'trim') {
      setTrim(value);
    }
    if (name === 'extra') {
      setExtra(value);
    }
    if (name === 'image') {
      setImage(value);
    }
    if (name === 'price') {
      setPrice(value);
    }
    if (name === 'quantity') {
      setQuantity(value);
    }
  };

  return (
    <div>
      <h3>Add a Car for Sale</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="make"
                placeholder="Add Make"
                value={make}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="model"
                placeholder="Add Model"
                value={model}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="year"
                placeholder="Add Year"
                value={year}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="color"
                placeholder="Add Color"
                value={color}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="range"
                placeholder="Add Range"
                value={range}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="trim"
                placeholder="Add Trim"
                value={trim}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="extra"
                placeholder="Add Extras"
                value={extra}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="image"
                placeholder="Add Image"
                value={image}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="price"
                placeholder="Add Price"
                value={price}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="quantity"
                placeholder="Add Quantity"
                value={quantity}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Submit
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a car for sale. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CarForm;
