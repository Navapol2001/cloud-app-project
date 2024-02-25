import Footer from "../components/Footer";
import NavBarContent from "../components/NavBarContent";
import SideBarContent from "../components/SideBarContent";

export default function ClientLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="drawer">
			<input id="header-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<NavBarContent />
				<div className="m-4 p-2">{children}</div>
				<Footer />
			</div>
			<div className="drawer-side">
				<label
					htmlFor="header-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				/>
				<SideBarContent />
			</div>
		</div>
	);
}
