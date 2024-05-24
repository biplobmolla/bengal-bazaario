"use client";

import { FaStar } from "react-icons/fa";
import Card from "./views/Card";
import { Button, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const products1 = await axios.get(
          "https://bengalbazzario-409003dd3e50.herokuapp.com/products"
        );
        setProducts(products1?.data);
      } catch (err: any) {
        console.log({ message: err.message });
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <div>
        <div
          className="hero-bg relative min-h-screen text-center text-white flex justify-center items-center"
          style={{
            background: "url(images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-xl translate-y-[-50px] relative z-10">
            <h1 className="text-3xl font-bold mb-5">
              Creating Memories That Last a Lifetime
            </h1>
            <p>
              Make them happy in return by feeding them flavorful food in a
              selection of choice formulasfor their distinctive.
            </p>
            <button className="px-6 py-2 font-bold bg-[#98CD32] rounded-md mt-12">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h4 className="text-center font-bold text-2xl mb-8">
          Popular Categories
        </h4>
        <div className="flex justify-center gap-x-4 items-center">
          {Services?.map((item: any) => (
            <div
              key={item?.icon}
              className="w-20 rounded-lg flex flex-col items-center gap-y-2 px-4 py-2 cursor-pointer bg-white"
            >
              <img className="w-full" src={item?.icon} alt={item?.label} />
              <p className="font-medium">{item?.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-center font-bold text-2xl mb-8">Our Products</h4>
        <div className="px-24 mb-10">
          <div className="grid grid-cols-4 justify-center gap-y-8">
            {products?.map((product: any, index: any) => (
              <Card
                key={product?.title}
                className="justify-self-center"
                title={product?.slug}
                rating={product?.rating}
                reviews={product?.reviews}
                link={product?.slug}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="text-xl px-10 py-2 border border-green-700 text-green-700 rounded-md">
              Load More
            </button>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#9ACD32] py-5 ">
        <div className="max-w-lg mx-auto">
          <h6 className=" text-xl font-medium my-1">Save 50% off</h6>
          <h2 className="text-3xl font-bold">Best Deal Offer</h2>
          <p className="my-2">
            Every Saturday and Sunday, enjoy 50% off on all grooming services
            for your furry companion.
          </p>
          <button className="px-4 py-1 bg-white font-bold rounded-md my-4">
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-[#9ACD32] py-5 mt-10">
        <div className="flex items-center w-full gap-x-10 justify-center">
          <p className="text-xl font-semibold">
            Enter Your email address to hear about our exclusive sales and
            offer.
          </p>
          <div className="flex items-center gap-x-3">
            <input
              className="py-2 px-4 min-w-72 rounded-lg"
              placeholder="Enter your email...."
            />
            <Button className="h-full py-2 px-5 font-bold">Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Services = [
  { label: "Dogs", icon: "./images/dog.png" },
  { label: "Cats", icon: "./images/cat.png" },
  { label: "Birds", icon: "./images/bird.png" },
  { label: "Fishes", icon: "./images/fish.png" },
];

// const Products = [
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     title: "WOOF PUPPY DOG FOOD 3KG",
//     rating: 4.5,
//     reviews: 12,
//   },
// ];
