import React from "react";

// import Ads from "../pages/Ads";
// import Car from "../pages/Car";
// import FAQ from "../pages/FAQ";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import OrderHistory from "../pages/OrderHistory";
// import SignUp from "../pages/Signup";
// import Success from "../pages/Success";

const SaleForm = () => {
  return (
    <div className="text-light bg-dark p-5">
      <SaleForm>
        <h1>Add A Car For Sale</h1>
        <form>
          <label>
            Make:
            <input type="text" name="name" />{" "}
          </label>
          <label>
            Model:
            <input type="text" name="name" />{" "}
          </label>
          <label>
            Year:
            <input type="text" name="name" />{" "}
          </label>
          <label>
            Color:
            <input type="text" name="name" />{" "}
          </label>
          <label>
            Range:
            <input type="text" name="name" />{" "}
          </label>
          <label>
            Features:
            <input type="text" name="name" />{" "}
          </label>
          <label>
            Class:
            <input type="text" name="name" />{" "}
          </label>
          <label>
            Price:
            <input type="text" name="name" />{" "}
          </label>
          <input type="submit" value="submit" />
        </form>
      </SaleForm>
    </div>
  );
};
// const handlePageChange = (page) => setCurrentPage(page);

export default SaleForm;
