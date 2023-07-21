import React from 'react';
import './style.css'

// order list to display users prev orders 
const OrderList = ({
  orders,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  console.log(`cars: ${orders}`)
  if (!orders.length) {
    return <h3 className='none'>🚗 You have no Orders Yet. You can visit the "Cars for Sale" page to find your first Car! 🚗</h3>;
  }

  return (
    <div>
      {showTitle && <h3 className='car-list-title'>{title}</h3>}
      {orders &&
        orders.map((order) => (
          <div key={order._id} className='car-list-item'>
            <p className='car-list-item-order'>Order Placed: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p>
            <p className='car-list-item-seller'>{order.cars.map((car) => ( <span key={car._id}> Car ID: {car._id}</span> ))}</p>
          </div>
        ))}
    </div>
  );
};

export default OrderList;