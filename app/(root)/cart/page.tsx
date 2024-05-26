"use client";

import { Store } from "@/app/Store";
import { Button } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";

const page = () => {
  const { state, dispatch: ctxDispatch } = useContext<any>(Store);
  const {
    cart: { cartItems },
  } = state;

  const params = useParams();

  const updateCartHandler = async (item: any, quantity: any) => {
    const { data } = await axios.get(
      `https://bengalbazzario-409003dd3e50.herokuapp.com/${item?.slug}`
    );
    if (data.stock < quantity) {
      window.alert("Sorry, Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item: any) => {
    ctxDispatch({
      type: "CART_REMOVE_ITEM",
      payload: item,
    });
  };

  return (
    <div>
      <div className="flex gap-x-5 p-10">
        <div className="p-4 basis-2/3 flex flex-col h-full justify-between gap-y-4 max-h-[400px] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div>
              Cart is empty.{" "}
              <Link className="font-semibold text-blue-700" href="/">
                Go Shopping
              </Link>
            </div>
          ) : (
            <div>
              {cartItems?.map((item: any) => (
                <div className="flex bg-white gap-x-5 px-5 py-2 rounded-md my-4">
                  <Image
                    src="/images/dog-bag.png"
                    alt="Bird"
                    width={100}
                    height={100}
                  />
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold max-w-xl">
                        {item?.title}
                      </h4>
                      <FaRegTrashAlt
                        className="cursor-pointer"
                        onClick={() => removeItemHandler(item)}
                      />
                    </div>
                    <div className="flex items-center gap-x-2 mt-4 w-full justify-between">
                      <p className="text-lg">Quantity:</p>
                      <div className="flex">
                        <div
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1)
                          }
                          className="bg-gray-400 flex items-center px-2 cursor-pointer rounded-tl-md rounded-bl-md"
                        >
                          <FaMinus />
                        </div>
                        <div className="py-.5 px-3 bg-gray-200 font-bold">
                          {item.quantity}
                        </div>
                        <div
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                          className="bg-gray-400 flex items-center px-2 cursor-pointer rounded-tr-md rounded-br-md"
                        >
                          <FaPlus />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="basis-1/3 bg-white rounded-md">
          <div className="flex flex-col gap-y-2 p-5">
            <h4 className="text-xl font-bold mb-4">Order Summary</h4>
            <div className="flex items-center justify-between font-semibold">
              <p>Total Items</p>
              <p>{cartItems.reduce((a: any, c: any) => a + c.quantity, 0)}</p>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p>Delivery Fee</p>
              <p>Price: $40</p>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p>Total Discount</p>
              <p>
                Price: $
                {cartItems.reduce(
                  (a: any, c: any) => a + c.discount_price * c.quantity,
                  0
                )}
              </p>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p>Total Amount</p>
              <p>
                Price: $
                {cartItems.reduce(
                  (a: any, c: any) => a + c.price * c.quantity,
                  0
                )}
              </p>
            </div>
            <div>
              <Link href="/shipping">
                <Button className="w-full bg-[#9ACD32] text-white font-bold h-full py-2 mt-10">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
