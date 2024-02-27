"use client";
// pages/page.tsx
import React, { useEffect, useState } from 'react';

// Define a type for the CreditView model based on your Kotlin entity
type CreditView = {
	id: number;
	acc_tracking: String;
	cust_id: String;
	accounting_id: String;
	detail: String;
	running_number: String;
	amount: number;
	upd_date: String;
	payment_date: String;
	payment_type: String;
	bank_account_id: String;
	check_id: String;
	check_due_date: String;
	statue: String; // Note: Did you mean "status"?
	note: String;
	pay_stats: String;
	customer_name: String;
};

const Page: React.FC = () => {
	const [creditViews, setCreditViews] = useState<CreditView[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCreditViews = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/creditView');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setCreditViews(data); // Assuming the API returns an array of CreditView
			} catch (err: any) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCreditViews();
	}, []);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>Credit View Data</h1>
			{creditViews.map((cv) => (
				<div key={cv.id}>
					<h2>{cv.customer_name} - {cv.amount}</h2>
					<p>Detail: {cv.detail}</p>
					<p>Payment Date: {cv.payment_date}</p>
					<p>Status: {cv.statue}</p>
					{/* Render other fields as needed */}
				</div>
			))}
		</div>
	);
};

export default Page;
