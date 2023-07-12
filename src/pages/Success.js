import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";

import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const order = await idbPromise("order", "get");
      const cars = order.map((item) => item._id);

      if (cars.length) {
        const { data } = await addOrder({ variables: { cars } });
        const carsData = data.addOrder.cars;

        productData.forEach((item) => {
          idbPromise("order", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Success>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Success>
    </div>
  );
}

export default Success;
