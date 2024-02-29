import Link from "next/link";

export default function Creditor() {
  return (
    <ul className="menu bg-base-200 min-w-80 rounded-box">
      <li className="menu-title text-white">Select <b>creditor&apos;s</b>view to look up to! 🧙🏻</li>
      <li><Link href="/#">รายงานเจ้าหนี้รายตัว</Link></li>
      <li><Link href="/#">รายการบิลเจ้าหนี้ค้างชำระ</Link></li>
      <li><Link href="/#">รายการยอดเจ้าหนี้รวมคงเหลือ</Link></li>
      <li><Link href="/#">รายการชำระเงินตามประเภทเจ้าหนี้</Link></li>
      <li><Link href="/#">รายการเคลื่อนไหวบัญชีเจ้าหนี้รายตัว</Link></li>
      <li><Link href="/#">รายงานเจ้าหนี้ค่าขนส่ง</Link></li>
    </ul>
  );
}
