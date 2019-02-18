import React from "react";
import AddButton from "./addButton";
import RemoveButton from "./removeButton";

export default function ProductListIteam(props) {
  return (
    <div className="product-list-item">
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name}
        src={props.product.image}
        alt={props.product.name}
      />
      <div>{props.product.description}</div>
      <div>{props.product.price} kr</div>
      <div>
        <AddButton
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />

        {props.cartItem ? (
          <RemoveButton
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
}
