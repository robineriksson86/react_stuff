import React from "react";
import { connect } from "react-redux";

function sort(items) {
  return items.sort((a, b) => a.id < b.id);
}
function total(items) {
  let totalSum = [0];

  items.map(item => totalSum.push(item.price * item.quantity));

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return totalSum.reduce(reducer);
}

function Cart(props) {
  const route = window.location.pathname;

  return route === "/cart" ? (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th />
          <th>Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => props.addToCart(item)}>+</button>
              <button onClick={() => props.removeFromCart(item)}>-</button>
            </td>
            <td>{(item.price * item.quantity).toFixed(2)}</td>
            <td>
              <button onClick={() => props.removeAllFromCart(item)}>
                Remove all from cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
        To pay: {total(props.cart)}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
