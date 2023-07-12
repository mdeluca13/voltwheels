import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
// import { Ads } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import Nav from "../pages/AppContainer";

export function Ads({ currentPage, handlePageChange }) {
  const [CarAds] = useMutation(ADS);

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
            <button
              onClick={() => handlePageChange("Car")}
              className={currentPage === "Car"}
            >
              Check Listing
            </button>
            <h3>{cars.name}</h3>
            <h3>{cars.make}</h3>
            <h3>{cars.model}</h3>
            <h3>{cars.year}</h3>
            <h3>{cars.color}</h3>
            <h3>{cars.range}</h3>
            <h3>{cars.trim}</h3>
            <h3>{cars.extra}</h3>
            <h3>{cars.image}</h3>
            <h3>{cars.price}</h3>
            <h3>{cars.quantity}</h3>
          </card>
          <card>
            <button
              onClick={() => handlePageChange("Car")}
              className={currentPage === "Car/:id"}
            >
              Check Listing
            </button>
            <h3>{cars.name}</h3>
            <h3>{cars.make}</h3>
            <h3>{cars.model}</h3>
            <h3>{cars.year}</h3>
            <h3>{cars.color}</h3>
            <h3>{cars.range}</h3>
            <h3>{cars.trim}</h3>
            <h3>{cars.extra}</h3>
            <h3>{cars.image}</h3>
            <h3>{cars.price}</h3>
            <h3>{cars.quantity}</h3>
          </card>
          <card>
            <button
              onClick={() => handlePageChange("Car")}
              className={currentPage === "Car/:id"}
            >
              Check Listing
            </button>
            <h3>{cars.name}</h3>
            <h3>{cars.make}</h3>
            <h3>{cars.model}</h3>
            <h3>{cars.year}</h3>
            <h3>{cars.color}</h3>
            <h3>{cars.range}</h3>
            <h3>{cars.trim}</h3>
            <h3>{cars.extra}</h3>
            <h3>{cars.image}</h3>
            <h3>{cars.price}</h3>
            <h3>{cars.quantity}</h3>
          </card>
          <card>
            <button
              onClick={() => handlePageChange("Car")}
              className={currentPage === "Car"}
            >
              Check Listing
            </button>
            <h3>{cars.name}</h3>
            <h3>{cars.make}</h3>
            <h3>{cars.model}</h3>
            <h3>{cars.year}</h3>
            <h3>{cars.color}</h3>
            <h3>{cars.range}</h3>
            <h3>{cars.trim}</h3>
            <h3>{cars.extra}</h3>
            <h3>{cars.image}</h3>
            <h3>{cars.price}</h3>
            <h3>{cars.quantity}</h3>
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

const handlePageChange = (page) => CurrentPage(page);
<Nav currentPage={currentPage} handlePageChange={handlePageChange} />;
{
  renderPage();
}
export default Ads;
