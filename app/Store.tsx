"use client";

import { createContext, useEffect, useReducer, useState } from "react";

export const Store = createContext({});

const useInitialState = () => {
  const [initialState, setInitialState] = useState({
    userInfo: null,
    cart: {
      shippingAddress: {},
      cartItems: [],
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") as string)
        : null;
      const shippingAddress = localStorage.getItem("shippingAddress")
        ? JSON.parse(localStorage.getItem("shippingAddress") as string)
        : {};
      const cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems") as string)
        : [];

      setInitialState({
        userInfo,
        cart: {
          shippingAddress,
          cartItems,
        },
      });
    }
  }, []);

  return initialState;
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item: any) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item: any) =>
            item.slug === existItem.slug ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item: any) => item.slug !== action.payload.slug
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
        },
      };
    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: { ...state.cart, shippingAddress: action.payload },
      };
    default:
      return state;
  }
};

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, useInitialState());
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
