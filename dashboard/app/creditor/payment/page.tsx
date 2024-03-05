"use client";
import React, { useEffect, useState } from 'react';
import Loading from '@/app/components/Loading';
import ErrorCard from '@/app/components/Error';
import { CreditView, PaymentType } from '@/app/utils/utilsTypes';

export default function PaymentPage() {
	const [creditViews, setCreditViews] = useState<CreditView[]>([]);
	const [custId, setCustId] = useState('');
	const [year, setYear] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [itemsPerPage] = useState(20); // Assuming this is a constant

	useEffect(() => {
		const fetchCreditViews = async () => {
			setIsLoading(true);
			try {
				const queryParams = new URLSearchParams({
					page: currentPage.toString(),
					size: itemsPerPage.toString(),
					...(custId && { custId }),
					...(year && { year }),
				});

				const response = await fetch(`http://localhost:8080/api/creditView?${queryParams}`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				// check if year filter is applied
				if (year) {
					data.content = data.content.filter((view: CreditView) => view.upd_date.includes(year));
				}
				setCreditViews(data.content);
				setTotalPages(data.totalPages); // Assuming this is how your API returns total pages
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCreditViews();
	}, [custId, year, currentPage, itemsPerPage]);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	if (isLoading) return <Loading />;
	if (error) return <ErrorCard errorMessage={error} />;

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold text-center mb-4">Payment Type Visualization</h1>
			{/* Filters */}
			<div className="mb-4">
				<input
					type="text"
					placeholder="Customer ID"
					value={custId}
					onChange={(e) => setCustId(e.target.value)}
					className="input input-bordered w-full max-w-xs mr-2"
				/>
				<input
					type="text"
					placeholder="Year"
					value={year}
					onChange={(e) => setYear(e.target.value)}
					className="input input-bordered w-full max-w-xs"
				/>
			</div>
			{/* Table */}
			<div className="overflow-x-auto">
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
						{creditViews.map((view) => (
							<tr key={view.id}>
								<td>{view.cust_id}</td>
								<td>{view.id}</td>
								<td>{view.upd_date}</td>
								<td>{view.payment_type}</td>
								<td>{view.running_number}</td>
								<td>{view.amount}</td>
								<td>{view.check_due_date}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{/* Pagination */}
			<div className="flex justify-center gap-4 mt-4">
				<button onClick={() => handlePageChange(Math.max(0, currentPage - 1))} className="btn btn-primary" disabled={currentPage === 0}>Previous</button>
				<button onClick={() => handlePageChange(currentPage + 1)} className="btn btn-primary" disabled={currentPage >= totalPages - 1}>Next</button>
			</div>
		</div>
	);
}