import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_ORDER, UPDATE_ORDER_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const OrderItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromOrder = item => {
    dispatch({
      type: REMOVE_FROM_ORDER,
      _id: item._id
    });
    idbPromise('order', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_ORDER,
        _id: item._id
      });
      idbPromise('order', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_ORDER_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('order', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromOrder(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
