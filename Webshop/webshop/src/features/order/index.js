import React from "react";
import { connect } from "react-redux";

class Order extends React.Component {
  state = {
    order: null
  };

  renderOrder() {
    const { name, email, order_items } = this.state.order;
    return (
      <div>
        <h3>Order details</h3>
        <div>Name: {name}</div>
        <div>Email: {email}</div>

        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                //product,
                qty,
                product: { name, image, price }
              } = item;
              return (
                <li>
                  <img src={image} alt="" width={32} />
                  {name}({qty} @ ${price} = $
                  {parseFloat(qty) * parseFloat(price)} )
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
  render() {
    const { order } = this.state;
    console.log(order);
    return <div>{order ? this.renderOrder() : "Loading...."}</div>;
  }
}

function mapStateToProps(state) {
  return {
    order: state.order
  };
}
export default connect(mapStateToProps)(Order);
