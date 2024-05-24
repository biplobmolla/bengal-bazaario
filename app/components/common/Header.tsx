import Input from "@/app/lib/Input";
import { Badge } from "antd";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full bg-[#98CD32] h-full p-5 flex justify-center">
      <div className="flex items-center gap-x-2 w-1/3">
        <Input placeholder="Search Items" className="w-4/5" />
        <Link href="/cart">
          <Badge count={5}>
            <IoCartOutline size={32} />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Header;
