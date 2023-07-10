import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { Ads } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Ads() {
  const [Ads] = useMutation(ADS);

  useEffect(() => {
    async function Ads() {
      const order = await idbPromise("order", "get");
      const cars = order.map((item) => item._id);

      if (products.length) {
        const { data } = await Ads({ variables: { products } });
        const productData = data.Ads.products;

        productData.forEach((item) => {
          idbPromise("order", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    Ads();
  }, [addOrder]);

  return (
    <div>
      <Ads>
        <Container></Container>
      </Ads>
    </div>
  );
}

export default Ads;
