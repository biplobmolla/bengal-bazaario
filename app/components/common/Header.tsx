"use client";

import { Store } from "@/app/Store";
import Input from "@/app/lib/Input";
import { Badge } from "antd";
import Link from "next/link";
import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext<any>(Store);
  const { cart, userInfo } = state;
  return (
    <div className="w-full bg-[#98CD32] h-full p-5 flex justify-center">
      <div className="flex items-center gap-x-2 w-1/3">
        <Input placeholder="Search Items" className="w-4/5" />
        <Link href="/cart">
          <Badge
            count={cart.cartItems.reduce((a: any, c: any) => a + c.quantity, 0)}
          >
            <IoCartOutline size={32} />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Header;
