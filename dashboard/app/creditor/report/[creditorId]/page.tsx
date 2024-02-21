interface CreditorTransactionData {
	transactionDate: Date;
	status: string;
	billNumber: string;
	amount: number;
}

const dummyTransactions: CreditorTransactionData[] = [
	{
		transactionDate: new Date('2024-01-01'),
		status: 'Completed',
		billNumber: 'BN001',
		amount: 100.00,
	},
	{
		transactionDate: new Date('2024-01-02'),
		status: 'Pending',
		billNumber: 'BN002',
		amount: 200.00,
	},
	{
		transactionDate: new Date('2024-01-03'),
		status: 'Failed',
		billNumber: 'BN003',
		amount: 150.00,
	},
];

export default function Page({ params }: { params: { creditorId: number; startPeriod: number; endPeriod: number; } }) {
	return (
		<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
			<p className="text-xl font-semibold my-4">Client ID: {params.creditorId}</p>
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="py-3 px-6">Date</th>
						<th scope="col" className="py-3 px-6">Status</th>
						<th scope="col" className="py-3 px-6">Bill Number</th>
						<th scope="col" className="py-3 px-6">Amount ($)</th>
					</tr>
				</thead>
				<tbody>
					{dummyTransactions.map((transaction, index) => (
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
							<td className="py-4 px-6">{transaction.transactionDate.toLocaleDateString()}</td>
							<td className={`py-4 px-6 ${transaction.status === 'Completed' ? 'text-green-500' : transaction.status === 'Pending' ? 'text-orange-500' : 'text-red-500'}`}>
								{transaction.status}
							</td>
							<td className="py-4 px-6">{transaction.billNumber}</td>
							<td className="py-4 px-6">{transaction.amount.toFixed(2)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
