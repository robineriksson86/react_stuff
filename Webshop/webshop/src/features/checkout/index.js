import React from "react";
import { connect } from "react-redux";

import Cart from "../cart";
import CheckoutForm from "./form";

function Checkout(props) {
  const { cart } = props;
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <Cart />
      </div>

      <CheckoutForm onSubmit={values => props.submitOrder(values, cart)} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}
function ordernumber() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth();
  const dd = today.getDate();

  return `${yyyy}${mm}${dd}${Math.floor(Math.random() * 1000) + 1}`;
}
function mapDispatchToProps(dispatch) {
  return {
    submitOrder: (values, cart) => {
      const neworder = {
        orderNumber: ordernumber(),
        name: values.order.name,
        adress: values.order.adress,
        city: values.order.city,
        country: values.order.country,
        postalCode: values.order.postalcode,
        phoneNumber: values.order.phonenumber,
        email: values.order.email,
        orderedItems: cart.map(item => ({
          productId: item.id,
          productName: item.name,
          qty: item.quantity,
          price: item.price,
          totalPrice: item.price * item.quantity
        }))
      };
      document.location.href = `/order`;
      dispatch({ type: "SUBMIT_ORDER", payload: neworder });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
