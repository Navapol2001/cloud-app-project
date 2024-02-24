"use client";
import NavBarContent from "./NavBarContent";
import SideBarContent from "./SideBarContent";

export default function Header() {
	return (
		<div className="drawer">
			<input id="header-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content"> {/* Begin page content */}
				<NavBarContent />
			</div> {/* End page content */}
			<div className="drawer-side"> {/* Begin drawer side */}
				<label htmlFor="header-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
				{/* Sidebar content here */}
				<SideBarContent />
			</div>
		</div>
	)
}
