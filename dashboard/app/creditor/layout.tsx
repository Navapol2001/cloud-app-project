import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<body data-theme="winter">
				<Header />
				<div className="flex flex-col w-full">
					<div className="card card-compact w-96 bg-base-100 shadow-xl self-center">
						{children}
					</div>
				</div>
				<Footer />
			</body>
		</>
	);
};