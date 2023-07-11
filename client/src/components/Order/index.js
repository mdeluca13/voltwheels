import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import OrderItem from '../OrderItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_ORDER, ADD_MULTIPLE_TO_ORDER } from '../../utils/actions';
import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Order = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getOrder() {
      const order = await idbPromise('order', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_ORDER, products: [...order] });
    }

    if (!state.order.length) {
      getOrder();
    }
  }, [state.order.length, dispatch]);

  function toggleOrder() {
    dispatch({ type: TOGGLE_ORDER });
  }

  function calculateTotal() {
    let sum = 0;
    state.order.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.order.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.orderOpen) {
    return (
      <div className="order-closed" onClick={toggleOrder}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="order">
      <div className="close" onClick={toggleOrder}>
        [close]
      </div>
      <h2>Order</h2>
      {state.order.length ? (
        <div>
          {state.order.map((item) => (
            <OrderItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your order yet!
        </h3>
      )}
    </div>
  );
};

export default Order;
