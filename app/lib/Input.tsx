import { IoSearch } from "react-icons/io5";
import "../globals.css";

const Input = ({
  className,
  placeholder,
}: {
  className?: string;
  placeholder?: string;
}) => {
  return (
    <div className={`flex items-center relative ${className}`}>
      <input
        placeholder={placeholder}
        className="border-0 outline-0 text-black px-3 py-1.5 rounded-lg focus:shadow-md w-full"
      />
      <IoSearch size={24} className="absolute text-[#444] right-1" />
    </div>
  );
};

export default Input;
