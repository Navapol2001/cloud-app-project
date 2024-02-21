import React from 'react';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';


export default function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<div>
				<div className="grid grid-cols-5">
					<SideBar />
					<article className="col-span-4">
						{children}
					</article>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};