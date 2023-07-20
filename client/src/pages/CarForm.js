import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Cart from '../components/Cart';
import { ADD_CAR } from '../utils/mutations';
import ImageUpload from '../components/Image';
import { IMAGE_URL } from '../components/Image';
import Auth from '../utils/auth';

const CarForm = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2000);
  const [color, setColor] = useState('');
  const [range, setRange] = useState(300);
  const [trim, setTrim] = useState('');
  const [extra, setExtra] = useState('');
  const [image, setImage] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState(30000);
  const [quantity, setQuantity] = useState(1);

  const [addCar, { error }] = useMutation(ADD_CAR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(IMAGE_URL);

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
          image: imageURL,
          price,
          quantity,
          seller: Auth.getProfile().data.username,
        },
      });
      window.location.assign('/carlist');
      if (error) {
        console.error(error)
      }
      // Reset form fields after submission
      setMake('');
      setModel('');
      setYear(2000);
      setColor('');
      setRange(300);
      setTrim('');
      setExtra('');
      setImage('');
      setImageURL('');
      setPrice(30000);
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
  };

  return (
    <div className='form-container'>
      <div className='form-container-2'>
        <h3 className="form-title">Add a Car for Sale</h3>

        {Auth.loggedIn() ? (

        <form
          className='car-form'
          onSubmit={handleFormSubmit}
        >
          <div>
            <label className='form-label'>Make</label>
            <input
              name="make"
              placeholder="Add Make"
              value={make}
              className=""
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label className='form-label'>Model</label>
            <input
              name="model"
              placeholder="Add Model"
              value={model}
              className='car-form-item'
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label className='form-label'>Year</label>
            <input
              name="year"
              placeholder="Add Year"
              value={year}
              className='car-form-item'
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label className='form-label'>Color</label>
            <input
              name="color"
              placeholder="Add Color"
              value={color}
              className='car-form-item'
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div>
          <label className='form-label'>Range</label>
            <input
              name="range"
              placeholder="Add Range"
              value={range}
              className='car-form-item'
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div>
          <label className='form-label'>Trim</label>
            <input
              name="trim"
              placeholder="Add Trim"
              value={trim}
              className='car-form-item'
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label className='form-label'>Extras</label>
            <input
              name="extra"
              placeholder="Add Extras"
              value={extra}
              className='car-form-item'
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label className='form-label'>Price</label>
            <input
              name="price"
              placeholder="Add Price"
              value={price}
              className='car-form-item'
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div className='visibility'>
            <label className="form-label">Image</label>
            <input
              name="image"
              placeholder="Add Image"
              value={imageURL}
              className="car-form-item"
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            {/* <ImageUpload name="image" onChange={handleChange} /> */}
            <label className='form-label'>Image</label>
            <ImageUpload setImageURL={setImageURL} />
          </div>
          <div>
            <button type="submit" className='form-submit'>Submit</button>
          </div>
          {error && (
            <div>
              {error.message}
            </div>
          )}
        </form>

        ) : (
          <p>
            You need to be logged in to add a car for sale. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
        <Cart />
      </div>  
    </div>
  );
};

export default CarForm;



// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_CAR } from '../utils/mutations';
// import { QUERY_ALL_CARS } from '../utils/queries';
// import ImageUpload from '../components/Image';
// // import Auth from '../utils/auth';

// function SaleForm() {

//   const [makeText, setMakeText] = useState('');
//   const [modelText, setModelText] = useState('');
//   const [yearText, setYearText] = useState('');
//   const [colorText, setColorText] = useState('');
//   const [rangeText, setRangeText] = useState('');
//   const [trimText, setTrimText] = useState('');
//   const [quantityText, setQuantityText] = useState('1');
//   const [extraText, setExtraText] = useState('');
//   const [classText, setClassText] = useState('');
//   // const [imageText, setImageText] = useState('');
//   const [priceText, setPriceText] = useState('');
  
//   // const [formState, setFormState] = useState({ make: '', model: '', year: '', color: '', range: '', trim: '', extra: '', class: '', image: '', price: '', quantity: '' });
//   const [addCar] = useMutation(ADD_CAR, {
//     update(cache, { data: {addCar } }) {
//       try {
//         const { cars } = cache.readQuery({ query: QUERY_ALL_CARS });

//         cache.writeQuery({
//           query: QUERY_ALL_CARS,
//           data: { cars: [addCar, ...cars] },
//         });
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(priceText)
//     try { 
//       const { data } = await addCar({
//         variables: {
//           makeText,
//           modelText,
//           yearText,
//           colorText,
//           rangeText,
//           trimText,
//           quantityText,
//           extraText,
//           classText,
//           // imageText,
//           priceText,
//           // user: Auth.getProfile().data.firstName,
//         }
//       })
//     //   const { mutationResponse } = await addCar({
//     //   variables: {
//     //     make: formState.make,
//     //     model: formState.model,
//     //     year: formState.year,
//     //     color: formState.color,
//     //     range: formState.range,
//     //     trim: formState.trim,
//     //     quantity: formState.quantity,
//     //     extra: formState.extra,
//     //     class: formState.class,
//     //     image: formState.image,
//     //     price: formState.price
//     //   },
//     // });
//   }
//   catch (err){
//     console.log(err)
//   }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'make') {
//       setMakeText(value);
//     } 
//     if (name === 'model') {
//       setModelText(value);
//     } 
//     if (name === 'year') {
//       setYearText(value);
//     } 
//     if (name === 'color') {
//       setColorText(value);
//     }
//     if (name === 'range') {
//       setRangeText(value);
//     }
//     if (name === 'trim') {
//       setTrimText(value);
//     }
//     if (name === 'quantity') {
//       setQuantityText(value);
//     }
//     if (name === 'extra') {
//       setExtraText(value);
//     }
//     if (name === 'class') {
//       setClassText(value);
//     }
//     if (name === 'price') {
//       setPriceText(value);
//     }
//   };

//   return (
//     <div className="text-light bg-dark p-5">
//       {/* <SaleForm> */}
//       <h1>Add A Car For Sale</h1>
//       <label>Add A Photo Of Your Vehicle</label>
//       <div>
//         <ImageUpload />
//       </div>
//       <form>
//         <label>
//           Make:
//           <input type="text" name="make" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Model:
//           <input type="text" name="model" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Year:
//           <input type="text" name="year" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Color:
//           <input type="text" name="color" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Range:
//           <input type="text" name="range" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Trim:
//           <input type="text" name="trim" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Extra:
//           <input type="text" name="extra" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Class:
//           <input type="text" name="class" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Quantity:
//           <input type="text" name="quantity" onChange={handleChange}/>{" "}
//         </label>
//         <label>
//           Price:
//           <input type="text" name="price" onChange={handleChange}/>{" "}
//         </label>
//         <input type="submit" value="submit" onClick={handleFormSubmit}/>
//       </form>
//     </div>
//   );
// }

// // const handlePageChange = (page) => setCurrentPage(page);

// export default SaleForm;
