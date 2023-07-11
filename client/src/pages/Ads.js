import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { Ads } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import Nav from "../components/Nav/index";

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
      <Nav />
      <Ads>
        <header>
          <h2>Your Ads</h2>
        </header>
        <Container>
          //individual car Ads
          <card>
            <button></button>
            <h3>{this.CarSpecs}</h3>
            <h3>{this.Price}</h3>
          </card>
          <card>
            <button></button>
            <h3>{this.CarSpecs}</h3>
            <h3>{this.Price}</h3>
          </card>
          <card>
            <button></button>
            <h3>{this.CarSpecs}</h3>
            <h3>{this.Price}</h3>
          </card>
          <card>
            <button></button>
            <h3>{this.CarSpecs}</h3>
            <h3>{this.Price}</h3>
          </card>
        </Container>
        //side column
        <aside>{bookMarks}</aside>
        <footer>
          <div>
            <h1>Car info</h1>
          </div>
        </footer>
      </Ads>
    </div>
  );
}

export default Ads;
