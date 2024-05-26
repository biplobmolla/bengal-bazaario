"use client";

import { Button, Card, Rate } from "antd";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Store } from "@/app/Store";

const page = () => {
  const params = useParams();
  const [product, setProduct] = useState<any>({});

  const { state, dispatch: ctxDispatch } = useContext<any>(Store);
  const {
    cart: { cartItems },
  } = state;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product1 = await axios.get(
          `https://bengalbazzario-409003dd3e50.herokuapp.com/${params?.slug}`
        );

        console.log("ENV: ", process.env.BASE_URL);
        setProduct(product1?.data);
      } catch (err: any) {
        console.log({ err: err.message });
      }
    };
    getProduct();
  }, []);
  useEffect(() => {
    console.log("Pro: ", product);
  }, [product]);

  const addToCartHandler = async (item: any) => {
    const existItem = cartItems.find((x: any) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `https://bengalbazzario-409003dd3e50.herokuapp.com/${params?.slug}`
    );
    if (data.countInStock < quantity) {
      window.alert("Sorry, Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <Card className="m-14">
      <div className="flex gap-x-10">
        <div>
          <Image
            width={300}
            height={400}
            src={"/images/dog-bag.png"}
            alt="Bird Image"
          />
        </div>
        <div className="pb-20 pt-10">
          <h4 className="text-3xl font-bold">{product?.title}</h4>
          <div className="flex items-center gap-x-2">
            <Rate
              className="text-sm"
              allowHalf
              disabled
              value={product?.rating}
            />
            <p className="text-blue-700 font-semibold">4 Ratings</p>
          </div>
          <p className="text-lg color-gray-500 font-semibold my-3">
            Brand : {product?.brand}
          </p>
          <p className="line-through text-xl font-bold">
            Price : ${product?.discount_price}
          </p>
          <p className="text-4xl font-bold text-blue-700">
            Price : ${product?.price}
          </p>
          <div className="mt-10 flex items-center gap-x-5">
            <Button className="px-24 py-2 h-full font-bold bg-[#1A9CB7] text-white">
              Buy Now
            </Button>
            <Button
              className="px-24 py-2 h-full font-bold bg-[#9ACD32] text-white"
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className="text-lg">{product?.description}</div>
    </Card>
  );
};

export default page;
