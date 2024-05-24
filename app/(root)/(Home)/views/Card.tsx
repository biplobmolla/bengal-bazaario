import { FaStar } from "react-icons/fa";

const Card = ({
  title,
  rating,
  reviews,
  className,
}: {
  title: string;
  rating: number;
  reviews: number;
  className?: string;
}) => {
  return (
    <div className={`w-56 bg-white p-2 ${className}`}>
      <div className="w-full h-60">
        <img
          className="w-full h-full"
          src="./images/product-1.png"
          alt="Product 1"
        />
      </div>
      <p className="font-bold leading-5 text-sm">{title}</p>
      <div className="flex items-center">
        <FaStar fill="orange" />
        <p className="ml-2">
          {rating} ({reviews} reviews)
        </p>
      </div>
      <p className="text-xl font-bold text-green-700">
        <span className="mr-0.5">$</span>21
      </p>
    </div>
  );
};

export default Card;
