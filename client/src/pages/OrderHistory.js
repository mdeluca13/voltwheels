import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  let user = {
    firstName: "Wyatt",
    lastName: "Howlett",
    orders: [{ purchaseDate: "10/12/2023", cars: [] }],
  };
  // const orders = [{ purchaseDate: "10/12/2023", cars: [] }];
  const { data } = useQuery(QUERY_USER);
  // let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Cars</Link>

        {/* {user ? ( */}

        <>
          <h2>
            Order History for {user.firstName} {user.lastName}
          </h2>
          {user.orders.map((order) => (
            <div key={order._id} className="my-2">
              <h3>
                {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
              </h3>
              <div className="flex-row">
                {order.cars.map(({ _id, image, name, price }, index) => (
                  <div key={index} className="card px-1 py-1">
                    <Link to={`/cars/${_id}`}>
                      <img alt={name} src={`/images/${image}`} />
                      <p>{name}</p>
                    </Link>
                    <div>
                      <span>${price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
        {/* ) : null} */}
      </div>
    </>
  );
}

export default OrderHistory;
