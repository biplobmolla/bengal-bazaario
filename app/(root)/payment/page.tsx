import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="flex items-center gap-x-10 justify-center">
        <Image
          className="cursor-pointer"
          src="/images/visa.png"
          alt="Visa Card Logo"
          height={200}
          width={300}
        />
        <Image
          className="cursor-pointer"
          src="/images/paypal.png"
          alt="Visa Card Logo"
          height={200}
          width={300}
        />
      </div>
    </div>
  );
};

export default page;
