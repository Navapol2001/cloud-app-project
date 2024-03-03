"use client";
import React, { useEffect, useState } from 'react';
import Loading from '@/app/components/Loading';
import ErrorCard from '@/app/components/Error';
import { CreditView, PaymentType } from '@/app/utils/utilsTypes';

export default function Page() {
	// date related states
	const [creditViews, setCreditViews] = useState<CreditView[]>([]);
	const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType>("");
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	// page related states
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(20);

	useEffect(() => {

		const fetchCreditViews = async () => {
			``
			try {
				const response = await fetch('http://localhost:8080/api/creditView');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				const filteredData = data.content
					.filter((cv: CreditView) => {
						return (selectedPaymentType === "" || cv.payment_type === selectedPaymentType) &&
							(startDate === "" && endDate === "" || isDateInRange(cv.upd_date, startDate, endDate));
					});
				setCreditViews(filteredData);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCreditViews();
	}, [selectedPaymentType, startDate, endDate]); // Re-fetch and filter when selectedPaymentType changes

	const isDateInRange = (dateStr: String, start: String, end: string): boolean => {
		// Parse the dates from the strings. The Date constructor can parse a wide variety of date formats.
		const date = new Date(dateStr.toString());
		const startDate = start ? new Date(start.toString()) : new Date(-8640000000000000); // Use earliest possible date if no start provided
		const endDate = end ? new Date(end.toString()) : new Date(); // Use current date if no end provided

		// Ensure the dates are valid, if not return false
		if (isNaN(date.getTime()) || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
			console.error('Invalid date detected in isDateInRange function');
			return false;
		}

		// Check if the date falls within the start and end date range
		return date >= startDate && date <= endDate;
	};

	// Pagination logic
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = creditViews.slice(indexOfFirstItem, indexOfLastItem);

	// Change page
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


	if (isLoading) return <Loading />;
	if (error) return <ErrorCard errorMessage={error} />;

	const getPageNumbers = (currentPage: number, totalPages: number): (number | string)[] => {
		const pageNumbers = [];
		const pageNeighbours = 1; // Number of pages to show around the current page
		let startPage: number, endPage: number;

		if (totalPages <= 5 + (pageNeighbours * 2)) {
			// Less than 5+2*pageNeighbours total pages, so show all
			startPage = 1;
			endPage = totalPages;
		} else {
			// More than 5+2*pageNeighbours total pages, so calculate start and end pages
			if (currentPage <= 3) {
				startPage = 1;
				endPage = 2 + (pageNeighbours * 2);
			} else if (currentPage + 2 >= totalPages) {
				startPage = totalPages - (3 + (pageNeighbours * 2));
				endPage = totalPages;
			} else {
				startPage = currentPage - pageNeighbours;
				endPage = currentPage + pageNeighbours;
			}
		}

		// Add the first page and the ellipsis
		if (startPage > 1) {
			pageNumbers.push(1);
			if (startPage > 2) {
				pageNumbers.push('...');
			}
		}

		// Add the middle pages
		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}

		// Add the last page and the ellipsis
		if (endPage < totalPages) {
			if (endPage < totalPages - 1) {
				pageNumbers.push('...');
			}
			pageNumbers.push(totalPages);
		}

		return pageNumbers;
	};

	// Inside your component, calculate the total pages and generate the adjusted page numbers
	const totalPages = Math.ceil(creditViews.length / itemsPerPage);
	const displayPageNumbers = getPageNumbers(currentPage, totalPages);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold text-center mb-4">Payment Type Visualization</h1>
			<div className="flex flex-col lg:flex-row gap-4 mb-6">
				{/* Filter by Payment Type */}
				<div className="flex-grow">
					<label className="label" htmlFor="paymentTypeSelect">Filter by Payment Type:</label>
					<select
						id="paymentTypeSelect"
						className="select select-bordered w-full"
						value={selectedPaymentType}
						onChange={(e) => setSelectedPaymentType(e.target.value as PaymentType)}
					>
						<option value="">All</option>
						<option value="เงินสด">เงินสด (Cash)</option>
						<option value="เช็ค">เช็ค (Check)</option>
						<option value="โอน">โอน (Transfer)</option>
					</select>
				</div>

				{/* Start Date */}
				<div className="flex-grow">
					<label className="label" htmlFor="startDate">Start Date:</label>
					<input
						type="date"
						id="startDate"
						className="input input-bordered w-full"
						value={startDate}
						onChange={(e) => setStartDate(e.target.value)}
					/>
				</div>

				{/* End Date */}
				<div className="flex-grow">
					<label className="label" htmlFor="endDate">End Date:</label>
					<input
						type="date"
						id="endDate"
						className="input input-bordered w-full"
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
					/>
				</div>
			</div>

			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
					<thead>
						<tr>
							<th>Customer Name</th>
							<th>Amount</th>
							<th>Update Date</th>
							<th>Check Due Date</th>
							<th>Customer ID</th>
							<th>Payment Type</th>
							<th>Check ID</th>
							<th>Bill No</th>
						</tr>
					</thead>
					<tbody>
						{currentItems.map((cv) => (
							<tr key={cv.id}>
								<td>{cv.customer_name}</td>
								<td>{cv.amount}</td>
								<td>{cv.upd_date}</td>
								<td>{cv.check_due_date === "0000-00-00" ? "-" : cv.check_due_date}</td>
								<td>{cv.cust_id}</td>
								<td>{cv.payment_type}</td>
								<td>{cv.check_id}</td>
								<td>{cv.running_number}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<nav className="pagination" style={{ marginTop: '20px' }}>
				{displayPageNumbers.map((number, index) => {
					return typeof number === 'string' ? (
						<span key={index} className="pagination-ellipsis">{number}</span>
					) : (
						<button
							key={number}
							onClick={() => paginate(number)}
							className={`btn mx-1 ${currentPage === number ? 'btn-active' : ''}`}
						>
							{number}
						</button>
					);
				})}
			</nav>
		</div>
	);
}
