"use client";
import { useState, useEffect } from "react";

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
	const [creditTrackingViews, setCreditTrackingViews] = useState<CreditTrackingView[]>([]);
	const [custId, setCustId] = useState("");
	const [year, setYear] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(20);

	useEffect(() => {
		async function fetchCreditTrackingViews() {
			setIsLoading(true);
			try {
				let url = `http://localhost:8080/api/creditTrackingView`;
				const queryParams = new URLSearchParams();
				// custId is UTF-8 you must encode it
				if (custId) queryParams.append("custId", custId);
				if (year) queryParams.append("year", year);
				queryParams.append("page", page.toString());
				queryParams.append("size", size.toString());
				url += `?${queryParams.toString()}`;

				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();

				// manually filter custId
				const filteredData = data.content.filter((cv: CreditTrackingView) => {
					return (custId === "" || cv.cust_id === custId);
				});
				// setCreditTrackingViews(data.content);
				setCreditTrackingViews(filteredData);
			} catch (err) {
				console.error(err instanceof Error ? err.message : "An error occurred");
				setError((err as Error).message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchCreditTrackingViews();
	}, [custId, year, page, size]);

	const handlePreviousPage = () => {
		setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
	};

	const handleNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold text-center mb-4">Debit Tracking Information</h1>
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
			<div className="flex justify-center gap-4 mt-4">
				<button onClick={handlePreviousPage} className="btn">Previous Page</button>
				<button onClick={handleNextPage} className="btn">Next Page</button>
			</div>
		</div>
	);
}
