"use client";

import { Store } from "@/app/Store";
import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const page = () => {
  const { state, dispatch: ctxDispatch } = useContext<any>(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const router = useRouter();

  const submitHandler = (e: any) => {
    e.preventDefault();
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage?.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    router.push("/payment");
  };

  return (
    <div>
      <div className="max-w-xl mx-auto my-10">
        <h2 className="font-bold text-xl mb-5">Shipping</h2>
        <div className="flex flex-col gap-y-5">
          <div>
            <label htmlFor="full_name">Full name</label>
            <Input id="full_name" placeholder="i.e Abdullah Al Noman" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Input id="address" placeholder="i.e Asulia, Savar, Dhaka" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <Input id="city" placeholder="i.e Dhaka" />
          </div>
          <div>
            <label htmlFor="postal_code">Postel Code</label>
            <Input id="postal_code" placeholder="i.e 1341" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <Input id="country" placeholder="i.e Bangladesh" />
          </div>
          <div>
            <Button
              onClick={submitHandler}
              className="bg-[#9ACD32] font-bold text-white w-full py-2 h-full mt-4"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
