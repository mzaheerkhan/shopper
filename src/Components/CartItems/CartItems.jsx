import React from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useContext } from "react";
import { ShopContext } from "./../../context/ShopContext";

const CartItems = () => {
  const { all_product, getTotalAmount, removeFromCart, cartItems } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div>
                <div className="cartitems-format  cartitems-format-main">
                  <img
                    src={e.image}
                    alt="product_image"
                    className="carticon-product-icon"
                  />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    alt="remove_icon"
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  />
                </div>
              </div>
              <hr />
            </>
          );
        } else {
          return null; // Return null to avoid rendering if the condition is false
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <p>${getTotalAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code , enter it here.</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
