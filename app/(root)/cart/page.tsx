import { Button } from "antd";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="flex gap-x-5 p-10">
        <div className="p-4 basis-2/3 flex flex-col gap-y-4 max-h-[400px] overflow-y-auto">
          <div className="flex bg-white gap-x-5 p-5 rounded-md">
            <Image src="/images/bird.png" alt="Bird" width={100} height={100} />
            <div>
              <h4 className="text-lg font-bold max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, ad.
              </h4>
              <div className="flex items-center gap-x-2 justify-between mt-2">
                <p className="text-lg">Quantity:</p>
                <div className="flex">
                  <div className="bg-gray-400 flex items-center px-2 cursor-pointer rounded-tl-md rounded-bl-md">
                    <FaMinus />
                  </div>
                  <div className="py-.5 px-3 bg-gray-200 font-bold">01</div>
                  <div className="bg-gray-400 flex items-center px-2 cursor-pointer rounded-tr-md rounded-br-md">
                    <FaPlus />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 bg-white rounded-md">
          <div className="flex flex-col gap-y-2 p-5">
            <h4 className="text-xl font-bold mb-4">Order Summary</h4>
            <div className="flex items-center justify-between font-semibold">
              <p>Items Total</p>
              <p>Price: $11</p>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p>Delivery Fee</p>
              <p>Price: $1</p>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p>Total Discount</p>
              <p>Price: $1</p>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p>Total Amount</p>
              <p>Price: $1</p>
            </div>
            <div>
              <Button className="w-full bg-[#9ACD32] text-white font-bold h-full py-2 mt-4">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
