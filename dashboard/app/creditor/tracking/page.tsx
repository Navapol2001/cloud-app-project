"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type CreditTrackingView = {
	id: number;
	upd_date: string;
	pay_stats: string;
	running_number: string;
	partial_paid: number;
	balance_amount: number;
	cust_id: string;
};

export default function TrackingPage() {
	const params = useSearchParams();
	const [creditTrackingViews, setCreditTrackingViews] = useState<CreditTrackingView[]>([]);
	const [custId, setCustId] = useState("");
	const [year, setYear] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const pageVal = params.get("page") || "0";
	const sizeVal = params.get("size") || "20";

	useEffect(() => {
		async function fetchCreditTrackingViews() {
			try {
				let url = `http://localhost:8080/api/creditTrackingView`;
				if (custId && year) {
					url += `/filter/${custId}/${year}?page=${pageVal}&size=${sizeVal}`;
				} else if (custId) {
					url += `/custId/${custId}?page=${pageVal}&size=${sizeVal}`;
				} else if (year) {
					url += `/year/${year}?page=${pageVal}&size=${sizeVal}`;
				} else {
					url += `?page=${pageVal}&size=${sizeVal}`;
				}

				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setCreditTrackingViews(data.content); // Assuming the 'content' field holds your data
			} catch (err) {
				console.error(err instanceof Error ? err.message : "An error occurred");
				setError((err as Error).message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchCreditTrackingViews();
	}, [pageVal, sizeVal, custId, year]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold text-center mb-4">Debit Tracking Information</h1>
			{/* Inputs for Customer ID and Year */}
			<div className="flex flex-wrap gap-4 mb-4">
				<input
					type="text"
					className="input input-bordered w-full max-w-xs"
					placeholder="Customer ID"
					value={custId}
					onChange={(e) => setCustId(e.target.value)}
				/>
				<input
					type="text"
					className="input input-bordered w-full max-w-xs"
					placeholder="Year"
					value={year}
					onChange={(e) => setYear(e.target.value)}
				/>
			</div>
			<div className="overflow-x-auto mt-4">
				<table className="table table-zebra w-full">
					<thead>
						<tr>
							<th>Customer ID</th>
							<th>ID</th>
							<th>Update Date</th>
							<th>Payment Status</th>
							<th>Running Number</th>
							<th>Partial Paid</th>
							<th>Balance Amount</th>
						</tr>
					</thead>
					<tbody>
						{creditTrackingViews.map((view) => (
							<tr key={view.id}>
								<td>{view.cust_id}</td>
								<td>{view.id}</td>
								<td>{view.upd_date}</td>
								<td>{view.pay_stats}</td>
								<td>{view.running_number}</td>
								<td>{view.partial_paid}</td>
								<td>{view.balance_amount}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
