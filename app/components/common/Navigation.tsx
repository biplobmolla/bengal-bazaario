import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 text-lg bg-black py-2 font-medium">
      <Link href="/dogs">Dogs</Link>
      <Link href="/cats">Cats</Link>
      <Link href="/birds">Birds</Link>
      <Link href="/fishes">Fishes</Link>
    </div>
  );
};

export default Navigation;
