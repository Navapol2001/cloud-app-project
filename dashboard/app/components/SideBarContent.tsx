import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";
import { ContentType } from "../utils/utilsTypes";

// Add a prop to the component for contentType
export default function SideBarContent({ contentType }: { contentType: ContentType }) {
  // Now, instead of deriving from the path, use the contentType prop directly
  const isCreditor = contentType === 'creditor';
  const isCustomer = contentType === 'customer';

  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li className="self-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={200}
          />
        </Link>
      </li>
      <div className="divider" />
      {isCreditor && (
        <>
          <li><Link href="/creditor/paid">Paid Bill Page</Link></li>
          <li><Link href="/creditor/payment">Payment Visualize Page</Link></li>
          <li><Link href="/creditor/tracking">Tracking Page</Link></li>
        </>
      )}
      {isCustomer && (
        <>
          <li><Link href="/customer/overview">Overview</Link></li>
          <li><Link href="/customer/transactions">Transactions</Link></li>
          <li><Link href="/customer/profile">Profile</Link></li>
        </>
      )}
    </ul>
  );
}
