import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './cart.css';
import { Istore } from "../../types/interfaces/Istore";

export const Cart: React.FC = () => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [subtotal, setSubtotal] = useState(0);
    const orderData = useSelector((state: Istore) => state.order.order);

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            setUserLoggedIn(true);
        }
    }, [])

    const calculateCartSubtotalPrice = () => {
        orderData.map(item => setSubtotal(subtotal + item.price));
    }

    return (
        <div className="order-cart-container">
            {!userLoggedIn &&
                <span>Please sign in to view your cart</span>}
            {userLoggedIn && <>
                <h2 className="cart-title">Your Order</h2>
                <div className="order-dishes-list-container">
                    {!orderData &&
                        <span>Add some dishes to your order to eat :)</span>}
                    {orderData.map((item, index) =>
                    (
                        <div key={index} className="single-dish-order">
                            <img className="dish-cart-image" src={item.img} alt="" />
                            <div className="order-dish-details">
                                <span className="quantity">{item.quantity}</span>
                                <div className="order-dish-details-A">
                                    <span className="order-dish-title">{item.name}</span>
                                    <span className="order-dish-price">₪ {item.price}.00</span>
                                </div>
                            </div>
                            <span className="order-dish-subtotal">₪ {item.price * item.quantity}.00</span>
                        </div>
                    ))}
                </div>
                <hr />
                <span className="comment-order-cart">Add a comment</span>
                <textarea name="order-comment" id="" cols={40} rows={5}></textarea>
                <div className="order-cart-btns">
                    <button id="checkout">checkout {`${subtotal}$`}</button>
                    <button id="order-history">Order history</button>
                </div>
            </>}
        </div>
    )
}

export default Cart;