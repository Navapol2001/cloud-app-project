"use client";
import { useState, useEffect } from 'react';

interface CreditViewApiResponse {
	id: number;
	acc_tracking: string;
	cust_id: string;
	accounting_id: string;
	detail: string;
	running_number: string;
	amount: number;
	upd_date: string; // assuming dates are in string format
	payment_date: string;
	payment_type: string;
	bank_account_id: string;
	check_id: string;
	check_due_date: string;
	statue: null | string;
	note: string;
	pay_stats: null | string;
	customer_name: string;
}


type allowedStatus = "C" | "A" | "A*" | "A**";

interface CreditorListData {
	date: Date;
	weightingNo?: number;
	status: string;
	billNo: string;
	amount: number;
}

export default function CreditorList() {
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [businessSector, setBusinessSector] = useState('');
	const [data, setData] = useState<CreditorListData[]>([]);


	// Function to determine row color based on status
	const getRowColor = (status: string) => {
		switch (status) {
			// this refers to full paid status
			case "A":
				return "bg-green-400"; // Green background for "A" and "C" status
			case "C":
				return "bg-green-400"; // Green background for "A" and "C" status
			// partial paid status
			case "A**":
				return "bg-yellow-400"; // Yellow background for "A**" status
			// no paid status
			case "A*":
				return "bg-red-400"; // Red background for "A*" status
			default:
				return ""; // Default, no additional background color
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/creditView');
				if (!response.ok) throw new Error('Network response was not ok');
				const json: CreditViewApiResponse[] = await response.json();

				// Limit to 20 items
				const limitedData = json.slice(0, 20);
				console.log(`Limited data:`)
				console.log(limitedData);

				// Transform and filter the data here if needed
				const transformedData = limitedData.map((item) => ({
					date: new Date(item.upd_date),
					weightingNo: item.id, // Adjust as needed for your logic
					status: "C", // Adjust your logic here to map API response to your status codes
					billNo: item.running_number,
					amount: item.amount,
				}));

				setData(transformedData);
			} catch (error) {
				console.error("Failed to fetch data:", error);
			}
		};

		fetchData();
	}, []);


	return (
		<div className="p-4">
			{/* display start date, end date and business for debug only */}
			<div id="debug">
				<p>Start Date: {startDate}</p> <br />
				<p>End Date: {endDate}</p> <br />
				<p>Business Sector: {businessSector}</p> <br />
			</div>
			<div className="flex justify-center items-center space-x-4">
				<div className="form-control w-full max-w-xs mb-4">
					<label className="label">
						<span className="label-text">Start Date</span>
					</label>
					<input type="date" className="input input-bordered w-full max-w-xs" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
				</div>

				<div className="form-control w-full max-w-xs mb-4">
					<label className="label">
						<span className="label-text">End Date</span>
					</label>
					<input type="date" className="input input-bordered w-full max-w-xs" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
				</div>

				<div className="form-control w-full max-w-xs mb-4">
					<label className="label">
						<span className="label-text">Business Sector</span>
					</label>
					<select className="select select-bordered" value={businessSector} onChange={(e) => setBusinessSector(e.target.value)}>
						<option value="" disabled>Choose one</option> {/* Make sure this matches the initial state value */}
						<option value="finance">Finance</option>
						<option value="technology">Technology</option>
						<option value="healthcare">Healthcare</option>
					</select>


				</div>
			</div>


			<div className="overflow-x-auto">
				<table className="table table-zebra">
					{/* head */}
					<thead>
						<tr>
							<th>Date</th>
							<th>Weight No</th>
							<th>Status</th>
							<th>Bill No</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{/* Table body */}
						{data.map((data, index) => (
							<tr key={index} className={`${getRowColor(data.status)}`}>
								<td>{new Date(data.date).toLocaleDateString()}</td>
								<td>{data.weightingNo}</td>
								<td>{data.status}</td>
								<td>{data.billNo}</td>
								<td>{data.amount}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}