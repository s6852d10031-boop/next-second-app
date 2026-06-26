import NavBarMain from "@/components/NavbarMain";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <NavBarMain />

      <Image
        className="mx-auto mt-8"
        src="https://images.pexels.com/photos/38058472/pexels-photo-38058472.jpeg"
        alt="cc"
        width={150}
        height={150}
      />
      <br />
      <Image
        className="mx-auto mt-8"
        src="https://cdn-icons-png.flaticon.com/128/18499/18499155.png"
        alt="cc"
        width={150}
        height={150}
      />

      ABOUT PAGE
    </div>
  );
}
