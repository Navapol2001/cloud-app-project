import Image from "next/image";
import logo from "../../public/logo.webp";

export default function SideBarContent() {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li className="self-center">
        <Image
          src={logo}
          width={200}
          height={200}
          alt="Logo"
          className="shadow-md border-spacing-1 border-black"
        />
      </li>
      <div className="divider" />
      <li>
        <a>Report 1</a>
      </li>
      <li>
        <a>Report 2</a>
      </li>
    </ul>
  );
}
