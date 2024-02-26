import Link from "next/link";

export default function Creditor() {
  return (
    <ul className="menu bg-base-200 min-w-80 rounded-box">
      <li className="menu-title text-white">Select <b>creditor&apos;s</b>view to look up to! 🧙🏻</li>
      <li><Link href="/#">Collect View</Link></li>
      <li><Link href="/#">List View</Link></li>
      <li><Link href="/#">Remanining View</Link></li>
      <li><Link href="/#">Purchasing View</Link></li>
      <li><Link href="/#">Movement View</Link></li>
      <li><Link href="/#">Transporation View</Link></li>
    </ul>
  );
}
