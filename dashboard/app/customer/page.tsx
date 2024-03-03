import Link from "next/link";

export default function Customer() {
	return (
		<div className="flex justify-center p-10">
			<ul className="menu bg-base-100 w-120 rounded-box p-4 shadow-lg">
				<li className="menu-title">
					<span className="text-lg font-bold text-white">Select <b>customer&apos;s</b> view to look up to! 🧙🏻</span>
				</li>
				<li>
					<Link href="/customer/paid" className="btn btn-ghost justify-start rounded-lg">
						Paid Bill Page
					</Link>
				</li>
				<li>
					<Link href="/customer/payment" className="btn btn-ghost justify-start rounded-lg">
						Payment Visualize Page
					</Link>
				</li>
				<li>
					<Link href="/customer/tracking" className="btn btn-ghost justify-start rounded-lg">
						Tracking Page
					</Link>
				</li>
			</ul>
		</div>
	);
}
