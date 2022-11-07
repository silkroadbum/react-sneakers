import React from 'react'

import AppContext from "../context";

export const useCart = () => {
    const {cartItems, setCartItems} = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, item) => item.price + sum, 0);

    return {cartItems, setCartItems, totalPrice};
}