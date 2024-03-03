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
				<NavBarContent contentType="customer" />
				<div className="m-4 flex justify-center">
					<div id="content" className="card bg-base-100 shadow-xl max-w-full sm:max-w-[calc(100%-20px)] md:max-w-[calc(100%-40px)] lg:max-w-[calc(100%-60px)] xl:max-w-[calc(100%-80px)]">
						{children}
					</div>
				</div>
				<Footer />
			</div>
			<div className="drawer-side">
				<label
					htmlFor="header-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				/>
				<SideBarContent contentType="customer" />
			</div>
		</div>
	);
}
