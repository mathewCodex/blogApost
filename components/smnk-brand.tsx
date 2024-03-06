import Link from "next/link";
import Image from "next/image";

export default function SmnkBrand() {
  return (
    <Link
      href="/"
      role="heading"
      className="flex items-center gap-2 text-2xl font-bold"
    >
      <Image width={68} height={47} src={"/logo.png"} alt="SMNK brand" />
      <span className="hidden md:block">SMNK Inc</span>
      <span className="sr-only">SMNK Inc</span>
    </Link>
  );
}
