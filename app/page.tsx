import NavBarMain from "@/components/NavbarMain";
import Image from "next/image";
import aa from "@/app/assets/images/aa.png";
import { Itim, Srisakdi } from "next/font/google";

const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});

const srisakdi = Srisakdi({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Page() {
  return (
    <div>
      <NavBarMain />
      <h1 className="text-3xl font-bold text-center mt-8">
        WELCOME TO SAU PRODUCT SALE WEBSITE
      </h1>

      <Image className="mx-auto mt-8"
        src={aa} alt="aa" width={150} height={150} />
      HOME PAGE: <span className={`${srisakdi.className}`}>หน้าแรก</span>
      <br />

      <span className={`${itim.className}`}>
        มหาวิทยาลัยเอเชียอาคเนย์
      </span>
    </div>
  );
}
