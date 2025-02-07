import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" width={50} height={50} alt="logo" />
      <p className="font-semibold text-xl tracking-tight">YouTube</p>
    </div>
  );
}
