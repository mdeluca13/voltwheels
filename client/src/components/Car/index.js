import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_ORDER, UPDATE_ORDER_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { order } = state

  const addToOrder = () => {
    const itemInOrder = order.find((orderItem) => orderItem._id === _id)
    if (itemInOrder) {
      dispatch({
        type: UPDATE_ORDER_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInOrder.purchaseQuantity) + 1
      });
      idbPromise('order', 'put', {
        ...itemInOrder,
        purchaseQuantity: parseInt(itemInOrder.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_ORDER,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('order', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToOrder}>Add to order</button>
    </div>
  );
}

export default ProductItem;
