import Link from "next/link";
import Image from "next/image";

export default function BlogBrand() {
  return (
    <Link
      href="/"
      role="heading"
      className="flex items-center gap-2 text-2xl font-bold"
    >
      <Image width={68} height={47} src={"/logo.svg"} alt="brand" />
      <span className="hidden md:block">BlogApost</span>
      <span className="sr-only">BlogApost Inc</span>
    </Link>
  );
}
