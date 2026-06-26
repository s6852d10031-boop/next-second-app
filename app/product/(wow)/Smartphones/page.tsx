import Image from "next/image";
import bb from "@/app/assets/images/bb.png";

export default function Page() {
  return (
    <div>
      <Image className="mx-auto mt-8"
      src={bb} alt="bb" width={150} height={150} />
      SMARTPHONE PAGE
    </div>
  );
}