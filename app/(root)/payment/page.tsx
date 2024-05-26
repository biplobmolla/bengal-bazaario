import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex items-center gap-x-10 justify-center">
        <Link href="https://sandbox.sslcommerz.com/EasyCheckOut/testcde64b91991e96050646de795c45a368adb">
          <Image
            className="cursor-pointer"
            src="/images/visa.png"
            alt="Visa Card Logo"
            height={200}
            width={300}
          />
        </Link>
        <Link href="https://sandbox.sslcommerz.com/EasyCheckOut/testcde64b91991e96050646de795c45a368adb">
          <Image
            className="cursor-pointer"
            src="/images/paypal.png"
            alt="Visa Card Logo"
            height={200}
            width={300}
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
