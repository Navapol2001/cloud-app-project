"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/components/Loading";
import ErrorCard from "@/app/components/Error";
import { CreditTrackingView } from "@/app/utils/utilsTypes";

export default function TrackingPage() {
	const [creditTrackingViews, setCreditTrackingViews] = useState<CreditTrackingView[]>([]);
	const [custId, setCustId] = useState("");
	const [year, setYear] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(20);

	useEffect(() => {
		const fetchCreditTrackingViews = async () => {
			setIsLoading(true);
			try {
				const queryParams = new URLSearchParams({
					custId: custId,
					year: year,
					page: page.toString(),
					size: size.toString(),
				});
				const url = `http://localhost:8080/api/creditTrackingView?${queryParams.toString()}`;

				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				let rows: CreditTrackingView[] = [];
				if (custId) {
					// manually filter the data if custId is provided
					rows = data.content.filter((view: CreditTrackingView) => view.cust_id === custId);
				} else {
					rows = data.content;
				}
				setCreditTrackingViews(rows);
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCreditTrackingViews();
	}, [custId, year, page, size]);

	const handlePageChange = (newPage: number) => {
		setPage((prevPage) => Math.max(0, prevPage + newPage));
	};

	if (isLoading) return <Loading />;
	if (error) return <ErrorCard errorMessage={error} />;

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
				<button onClick={() => handlePageChange(-1)} className="btn btn-primary" disabled={page === 0}>Previous Page</button>
				<button onClick={() => handlePageChange(1)} className="btn btn-primary">Next Page</button>
			</div>
		</div>
	);
}
