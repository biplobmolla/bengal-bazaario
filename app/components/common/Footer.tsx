import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#D9D9D9] p-10 pb-4">
      <div className="grid grid-cols-4">
        <div>
          <h4 className="text-xl font-bold mb-3 text-black">Catalog</h4>
          <div className="text-black flex flex-col gap-y-2">
            {Catalogs?.map((item: any) => (
              <span key={item?.link}>
                <Link className="hover:underline" href={item?.link}>
                  {item?.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3 text-black">For Clients</h4>
          <div className="text-black flex flex-col gap-y-2">
            {ForClients?.map((item: any) => (
              <span key={item?.link}>
                <Link className="hover:underline" href={item?.link}>
                  {item?.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3 text-black">For Clients</h4>
          <div className="text-black flex flex-col gap-y-2">
            {Contacts?.map((item: any) => (
              <span key={item?.link} className="flex items-center gap-x-2">
                {typeof item == "string"
                  ? item
                  : item?.map((i: any) => (
                      <Link href={i?.link}>{i?.icon}</Link>
                    ))}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3 text-black">Payment Methods</h4>
          <div className="w-3/4">
            <img src="./images/payment-methods.png" alt="Payment Methods" />
          </div>
        </div>
      </div>
      <div className="text-black text-center">© Happy Shop 2024</div>
    </div>
  );
};

export default Footer;

const Catalogs = [
  {
    label: "Cats",
    link: "/cats",
  },
  {
    label: "Dogs",
    link: "/dogs",
  },
  {
    label: "Rodents",
    link: "/rodents",
  },
  {
    label: "Fishes",
    link: "/fishes",
  },
  {
    label: "Birds",
    link: "/birds",
  },
  {
    label: "Brands",
    link: "/brands",
  },
  {
    label: "On Sale",
    link: "/on-sale",
  },
];

const ForClients = [
  {
    label: "Login",
    link: "/login",
  },
  {
    label: "Sign up",
    link: "/signup",
  },
  {
    label: "Delivery and payment",
    link: "/delivery-and-payment",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "About us",
    link: "/about",
  },
];

const Contacts = [
  "+8801644859378",
  "9.00 - 8.00",
  "nomanabdullah1526@gmail.com",
  [
    {
      icon: <FaFacebookF size={20} />,
      link: "https://facebook.com",
    },
    {
      icon: <RiInstagramFill size={20} />,
      link: "https://instagram.com",
    },
    {
      icon: <BiLogoTelegram size={20} />,
      link: "https://facebook.com",
    },
    {
      icon: <RiWhatsappFill size={20} />,
      link: "https://facebook.com",
    },
  ],
];
